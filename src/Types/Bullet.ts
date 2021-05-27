import { Dimensions } from "./Dimensions";
import { Position } from "./Position";



export class Bullet{
    id : number
    position: Position
    dimensions : Dimensions
    color : string
    
    constructor(id : number, pos : Position, di : Dimensions){
        this.id = id
        this.position = pos
        this.dimensions = di
        this.color = "blue"

    }

    Id(){
        return this.id
    }

    Position(){
        return this.position
    }

    Dimensions(){
        return this.dimensions
    }

    SetPosition(p : Position){
         this.position = p
    }

    SetDimensions(d : Dimensions){
         this.dimensions = d
    }

    Color(){
        return this.color
    }

}