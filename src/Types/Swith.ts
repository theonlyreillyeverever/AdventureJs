import { GameObjects } from "./Objects";
import { Position } from "./Position";
import Lever from "../Assets/Lever.png"
import LeverOff from "../Assets/off-switch.png"

import { Level } from "../Levels/Level";
import { GameObjectType } from "./GameObjectTypes";


//{x: 550, y: 560}
export class Swith extends GameObjects{

    constructor(pos : Position){
        super(GameObjectType.SWITCH,"Swith", "Opens Pathway", {x: pos.x, y: pos.y}, {width : 60, height :60}, false, Lever, true,0)
    }

    ToggleImgState(){
        if(this.DoAction()){
            this.SetImg(LeverOff)
            return;
        }
        this.SetImg(Lever)
    }

}