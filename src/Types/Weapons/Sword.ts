import {Weapon} from "../../Types/Weapon"
import { Position } from "../Position"
import SwordImg from "../../Assets/sword.png"

export class Sword extends Weapon{

    
    constructor(position : Position) {
        super("sword", "sharp", position, false, 20, SwordImg)
    }

    

}