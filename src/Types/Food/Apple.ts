import {Food} from "../Food"
import { Position } from "../Position";

export class Apple extends Food{
    constructor(name : string, description : string, position : Position, collected : boolean, healthPoints : number, img : string) {
        super(name, description, position, collected, healthPoints, img);
    }
}