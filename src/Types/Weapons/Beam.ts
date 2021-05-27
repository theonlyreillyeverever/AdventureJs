import {Weapon} from "../../Types/Weapon"
import { Position } from "../Position"


export class Beam extends Weapon{

    
    constructor(name : string, description : string, position : Position, collected : boolean, attackPoints : number, img :string) {
        super(name, description, position, collected, attackPoints, "")
    }

    

}