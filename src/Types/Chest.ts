import { GameObjectType } from "./GameObjectTypes";
import { GameObjects } from "./Objects";
import { Position } from "./Position";



export class Chest extends GameObjects{
    id: number
    constructor(id : number,position : Position){
        super(GameObjectType.CHEST, "House", "test house", position, {width: 130, height: 130}, false, "", false, 0)
        this.id = id
    }

    OpenChest(){
        if(this.Collected()){
            this.SetImg("");
        }
    }

}