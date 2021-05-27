import { Enemy } from "../Types/Enemy";
import { Food } from "../Types/Food";
import { Room } from "../Types/Room";
import { Weapon } from "../Types/Weapon";
import { LevelAbstract } from "./LevelAbstract";
import { Stage } from "./Leveltmp";


export class Level {
    id: number;
    name: string;
    description: string;
    rooms: Stage[];

    constructor(id : number, name : string, des : string, rooms : Stage[]){
        this.id = id
        this.name = name
        this.description = des
        this.rooms = rooms
    }

    Id(): number {
        return this.id
    }
    Name(): string {
        return this.name
    }
    Description(): string {
        return this.description
    }
    Rooms(): Stage[] {
        return this.rooms
    }
   
    
}