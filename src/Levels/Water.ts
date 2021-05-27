import { GameObjetsAbstract } from "./WallObejctsAbstract";
import {WaterAnimated} from "../Assets/WaterAnimated"
import { Position } from "../Types/Position";


export class Water extends GameObjetsAbstract{
    
    waterAnimatedRef : WaterAnimated
    img : any

    constructor(position: Position){
        super(position.x, position.y, true, true, false, 2)
        this.waterAnimatedRef = new WaterAnimated();
        this.SetNewImg(this.waterAnimatedRef.Img())
        
    }

    Animate(){
        this.waterAnimatedRef.AnimateStart(true)
    }

    WaterAnimated() : WaterAnimated
    {
        return this.waterAnimatedRef
    }


    Img(){
        return this.img;
    }

}