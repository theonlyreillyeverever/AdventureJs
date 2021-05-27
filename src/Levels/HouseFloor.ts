import { GameObjetsAbstract } from "./WallObejctsAbstract";
import { Position } from "../Types/Position";
import w from "../Assets/house-floor-2.jpeg"


export class HouseFloor extends GameObjetsAbstract{
    

    constructor(position: Position){
        super(position.x, position.y, false, false, true, 7)
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