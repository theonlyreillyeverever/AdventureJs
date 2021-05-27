import { Dimensions } from "../Types/Dimensions";
import { Player } from "../Types/Player";
import { Position } from "../Types/Position";
import { GameObjetsAbstract } from "./WallObejctsAbstract";
import { Wall } from "./Walls";
import w from "../Assets/wall.png"



export class MoveableBlock extends GameObjetsAbstract{

    dimensions : Dimensions
    canHurt: boolean
    moveable : boolean

    
    constructor(x : number, y : number, canHurt : boolean){
        super(x, y, canHurt, false, true, 3);
        this.moveable = true
        this.dimensions = {width : 50, height : 50}
        this.canHurt = canHurt
    }
    CanHurt(): boolean {
            return this.canHurt
    }

    Position(): Position{
        return this.position
    }

    Dimensions(){
        return this.dimensions
    }

    CanMove() : boolean{
        return this.moveable
    }

    SetPosition(position : Position){
        this.position = position
    }
    

    MoveBlock(player : Player){
        const width = player.Dimensions().width
        const height = player.Dimensions().height
        const single = this
        if(this.CanMove()){

        if(player.Position().x === single.Position().x+width && (player.Position().y >= single.Position().y && player.Position().y <= single.Position().y+height)){
            this.SetPosition({x : this.Position().x-10, y : this.Position().y})
        }
        else if(player.Position().x+width === single.Position().x && (player.Position().y >= single.Position().y && player.Position().y <= single.Position().y+height)){
            this.SetPosition({x : this.Position().x+10, y : this.Position().y})
        }
        else if(player.Position().y === single.Position().y+height && (player.Position().x >= single.Position().x && player.Position().x <= single.Position().x+width)){
            this.SetPosition({x : this.Position().x, y : this.Position().y-10})
        }
        else if(player.Position().y+height === single.Position().y && (player.Position().x >= single.Position().x && player.Position().x <= single.Position().x+width)){
            this.SetPosition({x : this.Position().x, y : this.Position().y+10})
        }
    }

    }

    Img(){
        this.img.src = w
        return this.img;
    }


}