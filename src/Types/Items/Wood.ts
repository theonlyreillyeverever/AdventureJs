import { Position } from "../Position";
import { Item } from "./Item";
import app from "../../Assets/Apple.png"
import { NullItem } from "./NullItem";
import { GameObjectType } from "../GameObjectTypes";
import { GameObjects } from "../Objects";



export class Wood extends GameObjects{
    constructor(pos : Position){
        super(GameObjectType.TOOL,"Wood", "use for fire", pos, {width: 20, height: 20}, false, app, true, 0)
    }

    Use(){

    }
}