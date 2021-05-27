import { Item } from "./Item";
import { Position } from "./Position";



export class Key implements Item{
    name: string;
    description: string;
    position: Position;
    collected: boolean;
    points: number;
    img: string;

    constructor(name : string, description : string, position : Position, collected : boolean, attackPoints : number) {
        this.name = name
        this.description = description
        this.position = position
        this.collected = collected
        this.points = 0
        this.img = "https://icons-for-free.com/iconfiles/png/512/key-131982518810247060.png"
    }

    Name() : string {
        return this.name;
    }

    Collected() : boolean{
        return this.collected
    }

    SetCollected(isCollected : boolean) : void{
        this.collected = isCollected;
    }

    Position(): Position{
        return this.position
    }

    Img() : string{
        return this.img
    }
    Use() : void {
        
    }

}