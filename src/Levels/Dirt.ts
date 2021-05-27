import { GameObjetsAbstract } from "./WallObejctsAbstract";
import { Position } from "../Types/Position";
import w from "../Assets/dirt.jpeg"


export class Dirt extends GameObjetsAbstract{
    

    constructor(position: Position){
        super(position.x, position.y, false, false, true, 6)
        this.img.src = w        
    }

    Animate(){
    }

    SetImg(newImage : string){
         this.img.src = newImage
  }


    Img(){
        return this.img;
    }

}