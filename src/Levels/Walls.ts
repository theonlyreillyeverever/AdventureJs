import { Player } from "../Types/Player"
import {Position} from "../Types/Position"
import {GameObjetsAbstract} from "./WallObejctsAbstract"
import w from "../Assets/wall.png"

export class Wall extends GameObjetsAbstract{
 
    moveable : boolean
    img: any
    isAnimated: boolean


    constructor(x : number, y : number){
        super(x, y, false, false, false, 1)
        this.moveable = false
        this.img = new Image();
        this.SetImg(w)
        this.isAnimated = false

    }

    Animate(){}
    IsAnimated(): boolean {
        return false
    }

    SetNewImg(img : any){
        this.img = img
    }


    SetImg(newImage: string): void {
        this.img.src = newImage
    }

    Posiition(): Position {
        return this.position
    }
    CanMove(): boolean {
        return this.moveable
    }
    Position() : Position{
        return this.position
    }

    CanHurt() : boolean{
        return this.canHurt
    }

    MoveBlock(player : Player): void{
        return;
    }

    Img(){
                return this.img;
    }



}