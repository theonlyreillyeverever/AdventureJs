import { GameObjectType } from "../Types/GameObjectTypes";
import { ItemFactory } from "../Types/ItemFactory";
import { GameObjects } from "../Types/Objects";
import { Position } from "../Types/Position";
import { Weapon } from "../Types/Weapon";



export class WeaponAdoptor extends GameObjects{
    id : number
    weapon : Weapon
    constructor(id : number,position : Position){
        super(GameObjectType.WEAPON, "","", position, {width : 50, height : 50}, false, "", true, 0);
        this.id = id;
        this.weapon = new ItemFactory().BuildWeapon(this.id, position.x, this.position.y)
        this.SetPosition(this.weapon.Position());
        this.SetImg(this.weapon.Img().src);
    }


    Weapon(){
        return this.weapon
    }


    



}