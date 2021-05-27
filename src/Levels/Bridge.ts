import { GameObjetsAbstract } from "./WallObejctsAbstract";
import {WaterAnimated} from "../Assets/WaterAnimated"
import { Position } from "../Types/Position";
import w from "../Assets/wood-board.png"


export class Bridge extends GameObjetsAbstract{
    

    constructor(position: Position){
        super(position.x, position.y, false, false, true, 4)
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