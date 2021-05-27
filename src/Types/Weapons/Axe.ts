import { Position } from "../Position";
import { Weapon } from "../Weapon";
import { WeaponArray } from "../WeaponArray";
import Axepng from "../../Assets/axe.png"
import { Float } from "../Items/Float";


export class Axe extends Weapon{

    constructor(pos : Position){
        super("Axe", "Big swing", pos, false, 20, Axepng)

    }



}