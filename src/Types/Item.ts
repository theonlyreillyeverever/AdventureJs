import { Player } from "./Player";
import {Position} from "./Position"



export interface Item {
        name: string,
        description: string
        position : Position
        collected : boolean
        points : number
        img : string

        Name() : string
        Position(): Position
        Collected() : boolean
        SetCollected(isCollected : boolean) : void
        Use(player : Player) : void
}