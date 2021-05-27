import { GameObjectType } from "../GameObjectTypes";
import { GameObjects } from "../Objects";



export class NullObject extends GameObjects{
    constructor() {
        super(GameObjectType.NULL, "" ,"", {x : -1, y : -1}, {width : -1, height : -1}, false, "", false, 0 )
    }
}