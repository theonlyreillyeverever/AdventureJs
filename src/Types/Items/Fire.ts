import { Position } from "../Position";
import { Item } from "./Item";
import fireStill from "../../Assets/fire-still.gif"



export class Fire extends Item{

    burningItem : Item
    burnTime : number

    constructor(item : Item, position : Position) {
        super("fire", "buring", position, {width: 50, height :50}, false, 100, fireStill, [])
        this.burningItem = item
        this.burnTime = item.points
    }

    Use(){

    }
    
}