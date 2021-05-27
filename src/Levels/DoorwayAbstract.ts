import { Position } from "../Types/Position";
import { Room } from "../Types/Room";
import { Level } from "./Level";

export interface DoorwayAbstract{
    pathway : number
    pathReturn : number
    doorId : number

    keyRequired : boolean
    description: string
    position : Position
    
    Pathway() :number
    PathwayReturn() :number
    DoorId() : number

    KeyRequired() : boolean
    Description() : string
    Position() : Position
    
}