import { GameObjectType } from "../../GameObjectTypes";
import { GameObjects } from "../../Objects";
import { Position } from "../../Position";
import { Item } from "../Item";



export class WaterItem extends GameObjects{
    constructor(position : Position){
        super(GameObjectType.WATER, "water", "For Farming or Health", position, {width : 20, height : 20}, false, "", true, 0);
    }
}