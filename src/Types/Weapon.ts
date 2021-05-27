import { GameObjectType } from "./GameObjectTypes";
import {Item} from "./Items/Item"
import { GameObjects } from "./Objects";
import { Player } from "./Player";
import { Position } from "./Position";

export class Weapon extends GameObjects {



    constructor(name : string, description : string, position : Position, collected : boolean, attackPoints : number, img : string) {
        super(GameObjectType.WEAPON,name, description, position, {width : 30, height : 30}, false, img, true, attackPoints)
        this.SetImg(img)
    }

    Img()
    {

        return this.img
    }



    SetImg(newImg : string){
        this.img.src = newImg
    }


    
    Name() : string{
        return this.name;
    }

    Description() : string{
        return this.description
    }

    Position() : Position{
        return this.position
    }

    Collected() : boolean{
        return this.collected
    }

    AttackPoints() : number{
        return this.points;
    }

    SetCollected(isCollected : boolean) : void{
        this.collected = isCollected;
    }

    SetPosition(newPosition : Position) : void{
        this.position = newPosition;
    }

    Use() : void {
        
    }



}