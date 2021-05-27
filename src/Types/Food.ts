import {Item} from "./Item"
import { Player } from "./Player";
import { Position } from "./Position";

export class Food implements Item {

    name: string;
    description: string;
    position: Position;
    collected: boolean;
    points : number
    img : string

    constructor(name : string, description : string, position : Position, collected : boolean, healthPoints : number, img : string) {
        this.name = name
        this.description = description
        this.position = position
        this.collected = collected
        this.points = healthPoints
        this.img = img
    }


    Img(): string{
        return this.img
    }


    setImg(newImg : string){
        this.img = newImg
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

    HealthPoints() : number{
        return this.points;
    }

    SetCollected(isCollected : boolean) : void{
        this.collected = isCollected;
    }

    SetPosition(newPosition : Position) : void{
        this.position = newPosition;
    }


    Use(player : Player) : void {
        alert("yum! "+ (player.Health() + this.HealthPoints()).toString()+ " extra poits")
        player.SetHealth(player.Health() + this.HealthPoints())
    }

}