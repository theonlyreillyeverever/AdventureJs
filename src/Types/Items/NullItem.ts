import { Item } from "./Item";



export class NullItem extends Item{
    constructor() {
        super("" ,"", {x : -1, y : -1}, {width : -1, height : -1}, false, 0, "", [])
    }
}