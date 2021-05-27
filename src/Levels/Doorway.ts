import { Player } from "../Types/Player";
import { Position } from "../Types/Position";
import { Room } from "../Types/Room";
import { DoorwayAbstract } from "./DoorwayAbstract";
import { Level } from "./Level";


export class Doorway implements DoorwayAbstract{
    pathway: number
    doorId : number
    pathReturn : number
    keyRequired: boolean;
    description: string;
    position : Position
    isVert : boolean

    constructor(doorId : number, pathway : number, pathReturn : number , keyRequired : boolean, description : string, position : Position, isVert : boolean){
        this.doorId = doorId
        this.pathway = pathway
        this.pathReturn = pathReturn
        this.keyRequired = keyRequired
        this.description = description
        this.position = position
        this.isVert = isVert
    }
    
    IsVert(){
        return this.isVert
    }

    PlayerStartSection(ply : Player, position: Position){
        ply.SetPosition(position)
    }

    UnlockDoor() : void{
        this.keyRequired = false;
    }

    DoorId(): number{
        return this.doorId
    }

    PathwayReturn(): number {
        return this.pathReturn
    }

    Pathway(): number{
            return this.pathway
    }
    KeyRequired(): boolean {
        return this.keyRequired
    }
    Description(): string {
        return this.description
    }

    Position() : Position{
        return this.position
    }
    
}