import { Inventory } from "./Inventory";
import {Person} from "./Person"
import { Position } from "./Position";
import {Dimensions} from "./Dimensions"
import { EntityLevel } from "./EntityLevel";
import { ExperiencePoints } from "./ExperiencePoints";
import { Player } from "./Player";
import boom from "../Assets/boom-split.png"

export class Enemy implements Person{
    name: string;
    health: number;
    inventory: Inventory;
    positition: Position;
    moveState : string;
    dimensions : Dimensions
    hitPoints : number
    isAlive : boolean
    displayIcon: string;
    img : any
    animationIndex : number
    level: EntityLevel;
    experiencePoints: ExperiencePoints;
    attack : boolean;
    deathState : boolean
    hit : boolean
    hitDuration : number
    hitDurationCount : number

    constructor(name : string, health: number, positition : Position, moveState : string, dimensions : Dimensions, hitPoints : number, icon : string) {
            this.name = name
            this.health = health
            this.inventory = new Inventory(3);
            this.positition = positition
            this.moveState = moveState
            this.dimensions = dimensions
            this.hitPoints = hitPoints
            this.isAlive = true;
            this.displayIcon = icon
            this.img = new Image()
            this.animationIndex = 0;
            this.level = new EntityLevel(1)
            this.experiencePoints = new ExperiencePoints(this.level)
            this.attack = false
            this.deathState = false
            this.hit = false

            this.hitDuration = 100
            this.hitDurationCount = 0
    }
   
    CurrentLevel(): number {
        return this.level.CurrentLevel()
}
    XP(): ExperiencePoints {
            return this.experiencePoints
    }


    Hit(){
        return this.hit
    }

    SetHit(b : boolean){
        this.hit = b
    }

    HitDuration(){
        return this.hitDuration
    }

    HitDurationCount(){
        return this.hitDurationCount
    }

    SetHitDurationCount(plus : number){
        this.hitDurationCount = plus
    }






    WithinRange(player: Player) : boolean{
       const  object = this
        if(player.Position().x >= object.Position().x-200 && player.Position().x <= object.Position().x && 
            player.Position().y >= object.Position().y-200 && player.Position().y <= object.Position().y
        ){            //console.log("range one")
            return true

        }
        else if(player.Position().x >= object.Position().x && player.Position().x <= object.Position().x+100 &&
        player.Position().y >= object.Position().y && player.Position().y <= object.Position().y+200
        ){
            return true
        }
        //console.log("range noen")
        return false
    }


    AnimateEnemy(){
        if(this.IsAlive()){
            this.IncreaseAnimationIndex()
        }
    }

    Attacking(){
        return this.attack;
    }

    SetIsAttacking(b : boolean){
        this.attack = b
    }

    DisplayIcon(): string {
        return this.displayIcon
    }
    SetDisplayIcon(icon: string): void {
        this.displayIcon = icon
    }

    setImg(img : string) : void{
        this.img.src = img;
    }
    Img() : HTMLImageElement{
        return this.img
    }


    IsAlive() : boolean {
        return this.isAlive
    }

    SetIsAlive(alive : boolean){
        this.isAlive = alive
    }

    Name(): string {
        return this.name
    }
    Health(): number {
        return this.health
    }
    Inventory(): Inventory {
            return this.inventory
    }
    Position(): Position {
            return this.positition
    }

    Dimensions() : Dimensions{
        return this.dimensions
    }

    SetPosition(newPosition: Position): void {
            this.positition = newPosition
    }

    SetHealth(newHealth: number): void {
       const updatedHealth = newHealth;
       this.health = updatedHealth;
       if(this.health <= 0){
           this.deathState = true
           this.setImg(boom)
           this.animationIndex = 0
       }
    }

    setMoveState(newState : string){
        this.moveState = newState
    }

    HitPoints(): number{
        return this.hitPoints
    }

    setHitPoints(hitPoints : number){
        this.hitPoints = hitPoints
    }


    AttackInProgress(player : Player){
        if(!this.deathState){
        if(player.Position().x >= this.Position().x &&
            (player.Position().y >= this.Position().y && player.Position().y <= this.Position().y+this.Dimensions().height)
        ){
            player.SetHealth(player.Health() - this.HitPoints())
            player.SetPosition({x: player.Position().x+20, y : player.Position().y})

        }
    }
    }

    Animate(){
        if(!this.deathState){
        if(!this.Attacking()){
            return[
                {sx : 10, sy : 60, px : 430, py : 430},
                {sx : 10, sy : 60, px : 430, py : 430},
                {sx : 10, sy : 60, px : 430, py : 430},
                {sx : 10, sy : 60, px : 430, py : 430},
    
                {sx : 540, sy : 60, px : 430, py : 430},
                {sx : 540, sy : 60, px : 430, py : 430},
                {sx : 540, sy : 60, px : 430, py : 430},
                {sx : 540, sy : 60, px : 430, py : 430},
            ]
        }
        return [
                
            {sx : 100, sy : 60, px : 430, py : 430},
            {sx : 100, sy : 60, px : 430, py : 430},
            {sx : 100, sy : 60, px : 430, py : 430},
            {sx : 100, sy : 60, px : 430, py : 430},

            {sx : 540, sy : 60, px : 430, py : 430},
            {sx : 540, sy : 60, px : 430, py : 430},
            {sx : 540, sy : 60, px : 430, py : 430},
            {sx : 540, sy : 60, px : 430, py : 430},

            {sx : 1100, sy : 60, px : 430, py : 430},
            {sx : 1100, sy : 60, px : 430, py : 430},
            {sx : 1100, sy : 60, px : 430, py : 430},
            {sx : 1100, sy : 60, px : 430, py : 430},

            {sx : 1600, sy : 60, px : 430, py : 430},
            {sx : 1600, sy : 60, px : 430, py : 430},
            {sx : 1600, sy : 60, px : 430, py : 430},
            {sx : 1600, sy : 60, px : 430, py : 430},

            {sx : 100, sy : 560, px : 430, py : 430},
            {sx : 100, sy : 560, px : 430, py : 430},
            {sx : 100, sy : 560, px : 430, py : 430},
            {sx : 100, sy : 560, px : 430, py : 430},

            {sx : 540, sy : 560, px : 430, py : 430},
            {sx : 540, sy : 560, px : 430, py : 430},
            {sx : 540, sy : 560, px : 430, py : 430},
            {sx : 540, sy : 560, px : 430, py : 430},

            {sx : 1100, sy : 560, px : 430, py : 430},
            {sx : 1100, sy : 560, px : 430, py : 430},
            {sx : 1100, sy : 560, px : 430, py : 430},
            {sx : 1100, sy : 560, px : 430, py : 430},

            {sx : 1600, sy : 560, px : 430, py : 430},
            {sx : 1600, sy : 560, px : 430, py : 430},
            {sx : 1600, sy : 560, px : 430, py : 430},
            {sx : 1600, sy : 560, px : 430, py : 430},
        ]
    }
   
        return [
            {sx : 0, sy : 0, px : 200, py : 230},
            {sx : 0, sy : 0, px : 200, py : 230},


            {sx : 200, sy : 0, px : 200, py : 230},
            {sx : 200, sy : 0, px : 200, py : 230},
           

            {sx : 400, sy : 0, px : 200, py : 230},
            {sx : 400, sy : 0, px : 200, py : 230},

            {sx : 600, sy : 0, px : 200, py : 230},
            {sx : 600, sy : 0, px : 200, py : 230},
           

            {sx : 800, sy : 0, px : 200, py : 230},
            {sx : 800, sy : 0, px : 200, py : 230},

            {sx : 0, sy : 230, px : 200, py : 230},
            {sx : 0, sy : 230, px : 200, py : 230},

            {sx : 200, sy : 230, px : 200, py : 230},
            {sx : 200, sy : 230, px : 200, py : 230},

            {sx : 800, sy : 230, px : 200, py : 230},
            {sx : 800, sy : 230, px : 200, py : 230},

        ]
    
     
    }

    AnimationIndex(){
        if(this.animationIndex >= this.Animate().length && this.deathState){
            this.SetIsAlive(false)
            this.animationIndex = this.Animate().length-1
            return this.animationIndex;
        }
        if(this.animationIndex >= this.Animate().length){
            this.animationIndex = 0
        }
        return this.animationIndex
    }

    IncreaseAnimationIndex(){
        if(this.animationIndex >= this.Animate().length && this.deathState){
            this.SetIsAlive(false)
            this.animationIndex = this.Animate().length-1
            return this.animationIndex;
        }
        if(this.animationIndex >= this.Animate().length){
            this.animationIndex = 0
            return;
        }
        this.animationIndex++;
    }

    Movement(){
        const rightMax = 800 - 50;
        const bottomMax = 700 - 50;
        const movement = 5;
        switch(this.moveState){
            case "right": {
                this.SetPosition({x : this.Position().x + movement, y : this.Position().y})
                if(this.Position().x+this.Dimensions().width >= rightMax){
                    this.setMoveState("left")
                }
                break;
            }
            case "up": {
                this.SetPosition({x : this.Position().x, y : this.Position().y + movement})
                if(this.Position().y <= 0){
                    this.setMoveState("left")
                }
                break;
            }
            case "left": {
                this.SetPosition({x : this.Position().x - movement, y : this.Position().y})
                if(this.Position().x <= 50){
                    this.setMoveState("right")
                }
                break;
            }
            case "down": {
                this.SetPosition({x : this.Position().x, y : this.Position().y - movement})
                if(this.Position().x >= bottomMax){
                    this.setMoveState("left")
                }
                break;
            }
        }

    }


    

    Follow(player : Person){
        if(this.Hit()){
            if(this.HitDurationCount() >= this.HitDuration()){
                this.SetHit(false)
                this.SetHitDurationCount(0)
            }
            
            this.SetHitDurationCount(this.HitDurationCount()+1)
            console.log(this.HitDurationCount(), " " , this.Hit())
        
    }

      const {x, y} = this.Position();
      const movement = 2.5;
      if(!this.deathState){

      if(this.Position().x < player.Position().x-10){
          this.SetPosition({x : this.Position().x+movement, y : this.Position().y})
      }

      if(this.Position().y < player.Position().y){
        this.SetPosition({x : this.Position().x, y : this.Position().y+movement})
    }

    if(this.Position().x > player.Position().x+10){
        this.SetPosition({x : this.Position().x-movement, y : this.Position().y})
    }

    if(this.Position().y > player.Position().y){
      this.SetPosition({x : this.Position().x, y : this.Position().y-movement})
  }

    }
}

}