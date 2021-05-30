import { Animate } from "../Assets/Animate";
import { Bush } from "../Bush";
import { Area } from "./Area";
import { Dimensions } from "./Dimensions";
import { GameObjectType } from "./GameObjectTypes";
import { Item } from "./Item";
import { NullObject } from "./Items/NullObject";
import { Player } from "./Player";
import { Position } from "./Position";

export enum OBJECTSTATE{
    READY,
    PENDING, 
    INUSE,
    COMPLETE
}


export class GameObjects{

    type : GameObjectType
    name: string;
    description: string;
    position: Position;
    dimentions : Dimensions
    collected: boolean;
    points: number;
    img: HTMLImageElement;
    area : Area
    withinRange : boolean
    doAction : boolean
    hasAction: boolean
    hasDepenties: boolean
    objectState : OBJECTSTATE

    constructor(type : GameObjectType, name : string, des : string, position : Position,
        dimentions : Dimensions,  collected : boolean, icon : string, hasAction : boolean, points : number ){
        this.name = name
        this.description = des
        this.position = position
        this.collected = collected
        this.dimentions = dimentions
        this.points = points;
        this.img = new Image();
        this.img.src = icon
        this.area = new Area()
        this.withinRange = false
        this.doAction = false
        this.hasAction = hasAction
        this.type = type
        this.hasDepenties = false
        this.objectState = OBJECTSTATE.READY

    }
    PlantState() : GameObjects{
        return this}
    Type(){
        return this.type
    }

    State(){
        return this.objectState
    }

    UpdateState(state : OBJECTSTATE){
        this.objectState = state

    }

    Animate() : Animate | null{
        return null
    }


    DoAction() : boolean{
        if(!this.hasAction){
            return false
        }
        return this.doAction
    }

    SetDoAction(action : boolean) : void{
            if(!this.hasAction){
                return;
            }
            this.doAction = action
            this.ToggleImgState()
    }


    Name() : string{
        return this.name
    }

    Options():string {
        return ""
    }


    WithinRange() : boolean{
        return this.withinRange;
    }

    SetWithinRange(b : boolean){
        this.withinRange = b
    }


    Area(player : Player, distance : number) : boolean{
        return this.area.WithinRange(player, this, distance);
    }

    Description() : string{
        return this.description
    }    

    Position() : Position{
        return this.position
    }

    SetPosition(pos : Position){
        this.position = pos
    }

    Dimensions() : Dimensions{
        return this.dimentions
    }

    Img() : HTMLImageElement{
        return this.img;
    }

    SetImg(img : string){
        this.img.src = img
    }

    Collected() : boolean{
        return this.collected
    }

    SetCollected(isCollected : boolean) : void{
        this.collected = isCollected;
    }
    Use(player : Player) : void {}

    ToggleImgState(){}

    Process(player : Player){}

    Enemy() : any{}

    Action(): any{}
    
    DrawObject(context : any){
        const {x, y} = this.Position()
        const {width, height} = this.Dimensions()
          
                context.drawImage(this.img, x, y, width, height)
            
    }

    CastToBush(i : GameObjects) : Bush{
        return (i as Bush)
    }

}