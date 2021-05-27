import { Area } from "../Area"
import { Dimensions } from "../Dimensions"
import { Inventory } from "../Inventory"
import { Player } from "../Player"
import { Position } from "../Position"
import { Swith } from "../Swith"
import { Float } from "./Float"

export enum itemState{
    READY,
    PENDING, 
    INUSE,
    COMPLETE
}

export class Item{


    name: string
    description: string
    position : Position
    collected : boolean
    points : number
    img : HTMLImageElement
    dependentItems : Item[]
    state : itemState 
    dim : Dimensions
    area : Area
    doAction : boolean

    stateF : Boolean
    floatMax : number
    floatIncrement : number
    count : number


    


    constructor(name: string, des : string, position : Position, dim : Dimensions, collected : boolean, points : number, icon : string, dependentItems : Item[] ){
        this.name = name
        this.description = des
        this.position= position
        this.dim = {width : 50, height: 50}
        this.collected = collected
        this.points = points
        this.img  = new Image();
        this.img.src = icon
        this.dependentItems = dependentItems
        this.state = itemState.PENDING
        this.area = new Area()
        this.doAction = false

        this.stateF = false
        this.floatMax = 20
        this.floatIncrement = 1
        this.count = 0

    }

    setImg(img : string){
        this.img.src = img
    }

    Area(player : Player, distance : number) : boolean{
        return this.area.WithinRange(player, this, distance);
    }

    UpdateState(state : itemState){
            this.state = state
    }

    State() : itemState{
        return this.state
    }

    ItemDependenies() : Item[]{
        return this.dependentItems
    }

    SetPosition(pos : Position){
        this.position = pos
    }




    CheckDependentItems(player : Player){
 
    }


    Img(){
        return this.img
    }

    Name() : string{
        return this.name
    }
    Position(): Position
    {
        return this.position
    }

    Dimensions(){
        return this.dim
    }

    Collected() : boolean{
        return this.collected
    }
    SetCollected(isCollected : boolean) : void
    {
        this.collected = isCollected
    }
    Use() : void
    {

    }

    SetDoAction(s : boolean){
        this.Use();
        this.doAction = s
    }

    DoAction(){
       return this.doAction

    }



    Options(){
        return "1) pick up \n 2) burn"
    }

}