import { Dimensions } from "./Dimensions";
import { Inventory } from "./Inventory";
import {Person} from "./Person"
import { Player } from "./Player";
import { Position } from "./Position";
import { EntityLevel } from "./EntityLevel";
import { ExperiencePoints } from "./ExperiencePoints";
import { Area } from "./Area";


export class Villager implements Person{
    name: string;
    health: number;
    inventory: Inventory;
    positition: Position;
    dimensions: Dimensions;
    hitPoints: number;
    isAlive: boolean;
    message : string
    displayIcon: string;
    MAX_MOVE_LIMIT = 300;
    moveAmount : number
    initialMoveState : number
    level: EntityLevel;
    experiencePoints: ExperiencePoints;
    area : Area

    constructor(name : string, health: number, positition : Position, dimensions : Dimensions, icon : string, message : string) {
        this.name = name
        this.health = health
        this.inventory = new Inventory(1);
        this.positition = positition
        this.dimensions = dimensions
        this.hitPoints = 10
        this.isAlive = true
        this.message = message
        this.displayIcon = icon
        this.moveAmount = 0;
        this.initialMoveState = this.GenerateRandom();
        this.level = new EntityLevel(1)
        this.experiencePoints = new ExperiencePoints(this.level)
        this.area = new Area()
    }
    CurrentLevel(): number {
        return this.level.CurrentLevel()
}
    XP(): ExperiencePoints {
            return this.experiencePoints
    }
    MoveAmount(): number{
        return this.moveAmount
    }

    SetMoveAmount(move : number){
        this.moveAmount = move;
    }


    DisplayIcon(): string {
        return this.displayIcon
    }
    SetDisplayIcon(icon: string): void {
        this.displayIcon = icon
    }

    SpeakWith(player : Player) : boolean{
        return this.area.WithinRangePlayer(player, this)
    }

    Message() : string{
        return this.message
    }

    Name(): string {
        return this.name
    }
    IsAlive(): boolean {
        return this.isAlive;
    }
    SetIsAlive(isAlive: boolean): void {
        throw new Error("Method not implemented.");
    }
    Health(): number {
        return this.health
    }
    HitPoints(): number {
        throw new Error("Method not implemented.");
    }
    setHitPoints(hitPoints: number): void {
        throw new Error("Method not implemented.");
    }
    Inventory(): Inventory {
        return this.inventory
    }
    Position(): Position {
        return this.positition
    }
    Dimensions(): Dimensions {
        return this.dimensions
    }
    SetPosition(newPosition: Position): void {
        this.positition = newPosition
    }
    SetHealth(newHealth: number): void {
        throw new Error("Method not implemented.");
    }

    GenerateRandom(){
        let randomnNumber = Math.floor(Math.random() * 4) + 1;
        return randomnNumber;
    }

    MoveState(): number{
        return this.initialMoveState;
    }

    ChangeMoveState(){
        this.initialMoveState = this.GenerateRandom();
    }

    CheckMoveAmount(){
        if(this.MoveAmount()+10 >= this.MAX_MOVE_LIMIT){
            this.SetMoveAmount(0)
            this.ChangeMoveState()
        }
    }

    Roaming(pauseRoaming : boolean){

        if(!pauseRoaming){
        this.CheckMoveAmount();
        if(this.MoveState() === 1 && this.MoveAmount() < this.MAX_MOVE_LIMIT){
            this.SetPosition({x : this.Position().x+0.1, y : this.Position().y})
            this.SetMoveAmount(this.MoveAmount()+.5)
  
        }

        if(this.MoveState() === 2 && this.MoveAmount() < this.MAX_MOVE_LIMIT){
            this.SetPosition({x : this.Position().x-0.1, y : this.Position().y})
            this.SetMoveAmount(this.MoveAmount()+.5)
        }

        if(this.MoveState() === 3 && this.MoveAmount() < this.MAX_MOVE_LIMIT){
            this.SetPosition({x : this.Position().x, y : this.Position().y-0.1})
            this.SetMoveAmount(this.MoveAmount()+.5)
  
        }

        if(this.MoveState() === 4 && this.MoveAmount() < this.MAX_MOVE_LIMIT){
            this.SetPosition({x : this.Position().x, y : this.Position().y+0.1})
            this.SetMoveAmount(this.MoveAmount()+.5)
        }

    }
                
 

    }

}