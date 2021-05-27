import { Entity } from "./Types/Entity";



export class Car extends Entity{
    maxX : number = 300
    maxY : number = 500
    speed : number = .5
    angle : number = 0
    constructor(){
        super("Car", "broom", {x : 0, y: 0}, { width: 40, height : 50}, false)
    }

    updateRotation(){
        this.angle += 10
        console.log(this.angle)
    }

    Angle(){
        this.updateRotation()
        return this.angle
    }

    Drive(){

        if(this.Position().x <= this.maxX){
           this.SetPosition({ x: this.Position().x+this.speed, y : this.Position().y})
       }
        // if(this.Position().y <= this.maxY){
        //    this.SetPosition({ x: this.Position().x, y : this.Position().y+this.speed})
        // }


    }
    

}