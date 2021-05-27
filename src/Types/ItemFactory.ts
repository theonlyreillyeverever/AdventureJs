import {Weapon} from './Weapon'
import {Food} from './Food'
import {Apple} from './Food/Apple'
import {LickMatt} from "../Assets/LickyMatt"
import AppleImg from "../Assets/Apple.png"


import {WeaponArray} from "./WeaponArray"
import { Axe } from './Weapons/Axe'
import { Sword } from './Weapons/Sword'

export class ItemFactory{
    BuildWeapon(input : number,x : number, y : number) : Weapon {
        switch(input){
            case 0: {
                const SwordWeapon = new Sword({x : x, y : y})
                return SwordWeapon;
            }
            case 1: {
                const AxeWeapon = new Axe({x : x, y :y})
                return AxeWeapon;
            }
            case 2: {
                const Knife = new Weapon("Knife", "Sharp",{x : x, y : y}, false, 50, "");
                return Knife;
            }



            default : {
                const Sword = new Weapon("Sword", "Sharp", {x : 0, y : 0}, false, 100, "");
                return Sword;
            }
         }
    }

    BuildFood(input : number, x : number, y : number) : Food {
        switch(input){
            case 0: {
                const AppleObj = new Apple("Apple", "Yum", {x : x, y : y}, false, 10, AppleImg);
                return AppleObj;
            }
            case 1: {
                const Chicken = new Food("Chicken", "A little raw", {x : x, y : y}, false, 50, "");
                return Chicken;
            }
            case 2: {
                const Beef = new Food("Beef", "Hits the spot!", {x : x, y : y}, false, 150,"");
                return Beef;
            }
            case 3: {
                const LickyMatt = new Food("LickyMatt", "OOOO",{x : x, y : y}, false, 50, LickMatt);
                return LickyMatt;
            }

            default : {
                const Apple = new Food("Apple", "Yum", {x : x, y : y}, false, 10, "");
                return Apple;
            }
        }
    }
}



