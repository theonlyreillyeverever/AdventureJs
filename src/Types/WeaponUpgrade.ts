

import { Position } from "./Position";
import {Weapon} from "./Weapon"

export class WeaponUpgrade extends Weapon{

    currentWeapon : Weapon;
    nameUpgrade : string;
    attackPointsUpgrade : number

    constructor(currentWeapon : Weapon, nameUpgrade : string, attackPointsUpgrade : number) {
        super(currentWeapon.Name() + " " + nameUpgrade, currentWeapon.Description(), currentWeapon.Position(), currentWeapon.Collected(), currentWeapon.AttackPoints() + attackPointsUpgrade, "");
        this.currentWeapon = currentWeapon;
        this.nameUpgrade = nameUpgrade;
        this.attackPointsUpgrade = attackPointsUpgrade;
    }

    NameUpgrade() : string {
        return this.currentWeapon.Name() + ", " + this.nameUpgrade
    }

    HitPoints() : number{
       return this.currentWeapon.AttackPoints() + this.attackPointsUpgrade;
    }
    


    
}