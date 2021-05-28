import { Inventory, InventoryObjects } from "./Inventory";
import { Weapon } from "./Weapon";

import {Person} from "./Person"
import { Position } from "./Position";
import {Dimensions} from "./Dimensions"

import {Item} from "./Items/Item"
import {GhoutGraphic} from "../Assets/MovingGhouts"
import { NullWeapon } from "./Weapons/NullWeapon";
import { EntityLevel } from "./EntityLevel";
import { ExperiencePoints } from "./ExperiencePoints";
import { Bullet } from "./Bullet";
import { PlaceObject } from "./PlaceObject";
import { GameObjects } from "./Objects";
import { Enemy } from "./Enemy";
import { NullItem } from "./Items/NullItem";
import { NullObject } from "./Items/NullObject";


export class Player{
    name: string;
    health: number;
    inventory: InventoryObjects;
    positition: Position;
    dimensions : Dimensions
    sideState : boolean
    onPlatform : boolean
    hitPoints: number;
    playerAttack : boolean
    currentWeapon : Weapon
    viewInventory : boolean
    speakWith : boolean
    isAlive : boolean;
    viewMessage : boolean; 
    inRange : boolean
    doAction : GameObjects | undefined
    displayIcon: string;
    GhoustIcon : GhoutGraphic
    level: EntityLevel;
    experiencePoints: ExperiencePoints;
    MAX_HEALTH : number = 1000
    isShooting : boolean;
    shotBullets : Bullet[] = []
    SHOTS_PER_SECION : number = 300
    shotCount : number = 0;
    placeObject : PlaceObject
    canCross : boolean
    itemtmp : GameObjects;

    constructor(name : string, health: number, positition : Position, dimensions : Dimensions) {
            this.name = name
            this.health = health
            this.inventory = new InventoryObjects(5);
            this.dimensions = dimensions
            this.positition = positition
            this.sideState = true
            this.onPlatform = false;
            this.hitPoints = 5;
            this.playerAttack = false
            this.currentWeapon = new NullWeapon("", "", {x : 0, y : 0},true, 0, "")
            this.viewInventory = false
            this.speakWith = false;
            this.isAlive = true;
            this.viewMessage = false
            this.displayIcon = ""
            this.GhoustIcon = new GhoutGraphic();
            this.level = new EntityLevel(0)
            this.experiencePoints = new ExperiencePoints(this.level)
            this.isShooting = false
            this.placeObject = new PlaceObject()
            this.inRange = false
            this.canCross = false
            this.itemtmp = new NullObject()
            //this.bullet = new Bullet(0, {x : this.Position().x+10, y : this.Position().y}, {width: 10, height: 10})
    }

        setCanCross(c : boolean)
        {
                this.canCross = c
        }

        CanCross() : boolean{
               return this.canCross
        }

        InRange() : boolean{
                return this.inRange 
        }

        IsInRange(toggle : boolean){
                this.inRange = toggle;
        }

        IsInRangeItem(toggle : boolean, item: GameObjects){
                // if(item === this.itemtmp && toggle === this.inRange){
                //         return;
                // }
                this.inRange = toggle;
                this.itemtmp = item
        }

       CurrentItemInRange(){
                return this.itemtmp
        }

        DoAction() : GameObjects | undefined{
                if(this.DoAction === undefined){
                        return;
                }
                return this.doAction
        }

        SetDoAction(action : GameObjects){
                this.doAction = action
        }


        CurrentLevel(): number {
                return this.level.CurrentLevel()
        }
        XP(): ExperiencePoints {
                return this.experiencePoints
        }

        Shooting(){
                return this.isShooting
        }

        SetShooting(b : boolean){
                this.isShooting = b

        }

        GhoustIconProptery(){
                return this.GhoustIcon
        }

        DisplayIcon(): string {
                return this.displayIcon
        }
        SetDisplayIcon(icon: string): void {
                this.displayIcon = icon
        }

        Shoot(b : Bullet){
           if(this.shotCount >= this.SHOTS_PER_SECION && this.Shooting()){
                b.SetPosition({x  : this.Position().x+10, y : b.Position().y})
                this.shotCount = 0;
                this.SetShooting(false)
                return;
           }
           b.SetPosition({x  : b.Position().x+10, y : b.Position().y})
           //console.log(b.Position().x)
           this.shotCount++
        }

        PushBuillet(){
                return this.shotBullets
        }
        AddBullet(){
                const b : Bullet = new Bullet(-1, {x  : this.Position().x+10, y : this.Position().y}, {width: 10, height: 10})
                this.shotBullets.push(b)
        }

        ShotsFired(){
                return this.shotBullets;
        }


    Speak() : boolean{
            return this.speakWith
    }

    ViewMessage() : boolean{
            return this.viewMessage
    }
    SetViewMessage(mess : boolean) : void{
            this.viewMessage = mess
    }


    SetSpeak(speak : boolean): void{
            this.speakWith = speak
    }

    IsAlive() : boolean {
        return this.isAlive
    }

    SetIsAlive(alive : boolean){
        this.isAlive = alive
    }
    SetViewInventory(viewInventory : boolean) : void{
        this.viewInventory = viewInventory
        }

        ViewInventory(): boolean{
                return this.viewInventory
        }

        SetViewMap(viewInventory : boolean) : void{
                this.viewInventory = viewInventory
                }
        
                ViewMap(): boolean{
                        return this.viewInventory
                }

    SetPlayerAttack(attack : boolean) : void{
            this.playerAttack = attack
    }

    PlayerAttack(): boolean{
            return this.playerAttack
    }

    SetCurrentWeapon(newWeapon : Weapon){
            this.currentWeapon = newWeapon
    }

    CurrentWeapon(): Weapon{
      
            return this.currentWeapon
    }

        HitPoints(): number {
                return this.hitPoints
        }
        setHitPoints(hitPoints: number): void {
                this.hitPoints = hitPoints
        }
    Name(): string {
        return this.name
    }
    Health(): number {
        return this.health
    }

    SetOnPlatform(newState : boolean) : void{
            this.onPlatform = newState;
    }

    OnPlatform() : boolean{
            return this.onPlatform
    }

    Dimensions() : Dimensions{
            return this.dimensions
    }

    Inventory(): InventoryObjects {
            return this.inventory
    }
    Position(): Position {
            return this.positition
    }

    SetPosition(newPosition: Position): void {
            this.positition = newPosition
    }



    SetHealth(newHealth: number): void {
       //const updatedHealth = this.health-newHealth;
       if(newHealth > this.MAX_HEALTH){
               newHealth = this.MAX_HEALTH;
               return;
       }
       this.health = newHealth;
       this.CheckIfAlive();
    }

    CheckIfAlive(){
            if(this.Health() <= 0){
                    this.SetIsAlive(false)
            }
    }

    SetImageState(newState : boolean){
            this.sideState = newState;
    }

    ImageState(){
        return this.GhoustIcon.Img()
    }


    PlaceObject(){
            return this.placeObject
    }



    CollectItem(item : GameObjects){
        if(this.Position().x === item.Position().x && this.Position().y === item.Position().y){
                this.Inventory().AddItem(item);
                item.SetCollected(true);
                this.Inventory().SetKey(item)

        }
    }

    CollectWeapon(weapon : Weapon){
        if(!weapon.Collected() && this.Position().x === weapon.Position().x && this.Position().y === weapon.Position().y){
                this.SetCurrentWeapon(weapon);
                weapon.SetCollected(true);
                alert(weapon.Name() + " Collected" + weapon.Collected()   )

                }
        }
    


    AttackInProgress(player : Enemy){


//             if(player.PlayerAttack() && (player.Position().x + 50 >= e.Position().x && player.Position().x <= e.Position().x+e.Dimensions().width) && (player.Position().y  >= e.Position().y && player.Position().y  <= e.Position().x+e.Dimensions().height) ){

        if(this.PlayerAttack()){
                if((this.Position().x+100 >= player.Position().x && this.Position().x <= player.Position().x+player.Dimensions().width) 
                && (this.Position().y  >= player.Position().y && this.Position().y  <= player.Position().x+player.Dimensions().height)){
                        player.SetHealth(player.Health() - this.currentWeapon.AttackPoints())
                        player.SetPosition({x: player.Position().x+50, y : player.Position().y})
                        console.log(player.Position(), " hit ", this.Position())
                        player.SetHit(true)
                }
                else if(this.Position().x >= player.Position().x){
                        player.SetHealth(player.Health() - this.currentWeapon.AttackPoints())
                        player.SetPosition({x: player.Position().x+50, y : player.Position().y})
                        console.log(player.Position(), " hit ", this.Position())
                        player.SetHit(true)

                }
                else{console.log("miss")

                console.log(player.Position(), " MISS ", this.Position())

        }

        }
    }



}