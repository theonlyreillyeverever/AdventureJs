
import {Inventory} from "./Inventory"
import {Position} from "./Position"
import {Dimensions} from "./Dimensions"
import { EntityLevel } from "./EntityLevel"
import { ExperiencePoints } from "./ExperiencePoints"

export interface Person{
        name : string, 
        health : number,
        inventory : Inventory,
        positition : Position,
        dimensions : Dimensions
        hitPoints : number
        isAlive : boolean
        displayIcon : string
        level : EntityLevel
        experiencePoints : ExperiencePoints


        Name() : string,
        IsAlive() : boolean
        SetIsAlive(isAlive : boolean) : void
        Health() : number,
        HitPoints() : number
        setHitPoints(hitPoints : number) : void
        Inventory() : Inventory,
        Position() : Position,
        Dimensions() : Dimensions
        SetPosition(newPosition: Position) : void,
        SetHealth(newHealth : number) : void
        DisplayIcon() : string
        SetDisplayIcon(icon : string) : void
        CurrentLevel(): number
        XP(): ExperiencePoints


        
}