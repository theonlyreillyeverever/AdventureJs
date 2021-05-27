import {Weapon} from "./Weapon"



const Sword = new Weapon("Sword", "Sharp", {x : 0, y : 0}, false, 100, "");
const Axe = new Weapon("Axe", "Sharp", {x : 0, y : 0}, false, 150, "");
const Knife = new Weapon("Knife", "Sharp", {x : 0, y : 0}, false, 50, "");

export const WeaponArray : Weapon[] = [

    Sword,
    Axe,
    Knife

]