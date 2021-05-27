import { Dimensions } from "./Dimensions";
import { Player } from "./Player";
import { Position } from "./Position";
import CowIMG from "../Assets/cow.gif"
import {CowAnimate, Animate} from "../Assets/Animate"

export class Entity {

    private name: string;
    private description: string;
    private position: Position;
    private dimentions : Dimensions
    private collected: boolean;
    private img: HTMLImageElement;
    private MAX_MOVE_LIMIT = 300;
    private moveAmount : number = 0
    private initialMoveState : number = this.GenerateRandom()
    
    
    constructor(name : string, des : string, position : Position, dimentions : Dimensions,  collected : boolean){
        this.name = name
        this.description = des
        this.position = position
        this.collected = collected
        this.dimentions = dimentions
        this.img = new Image()
    }

    Name() : string{
        return this.name
    }

    Description() : string{
        return this.description
    }    

    Position() : Position{
        return this.position
    }

    SetPosition(position : Position){
        this.position = position
    }

    Dimensions() : Dimensions{
        return this.dimentions
    }

    Img() : HTMLImageElement{
        return this.img;
    }

    SetImg(img : string){
        this.img.src = img
    }

    Collected() : boolean{
        return this.collected
    }

    SetCollected(isCollected : boolean) : void{
        this.collected = isCollected;
    }

    Follow(player: Player): void {}

    WithinRange(player: Player) : boolean{
        if(player.Position().x >= this.Position().x-200 && player.Position().x <= this.Position().x && 
            player.Position().y >= this.Position().y-200 && player.Position().y <= this.Position().y
        ){            //console.log("range one")

            return true

        }
        else if(player.Position().x >= this.Position().x && player.Position().x <= this.Position().x+100 &&
        player.Position().y >= this.Position().y && player.Position().y <= this.Position().y+200
        ){
           // console.log("range two")
            return true
        }
        //console.log("range noen")

        return false
    }

    GenerateRandom(){
        let randomnNumber = Math.floor(Math.random() * 4) + 1;
        return randomnNumber;
    }

    MoveAmount(): number{
        return this.moveAmount
    }

    SetMoveAmount(move : number){
        this.moveAmount = move;
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

    Roaming(pauseRoaming : boolean, AnimaionPlace : Animate){
        const move = 2.5
        if(!pauseRoaming){
        this.CheckMoveAmount();
        if(this.MoveState() === 1 && this.MoveAmount() < this.MAX_MOVE_LIMIT){
            this.SetPosition({x : this.Position().x+move, y : this.Position().y})
            this.SetMoveAmount(this.MoveAmount()+.5)
            AnimaionPlace.AnimateStart(true)
            AnimaionPlace.SetDirectionState(true)
  
        }

        if(this.MoveState() === 2 && this.MoveAmount() < this.MAX_MOVE_LIMIT){
            this.SetPosition({x : this.Position().x-move, y : this.Position().y})
            this.SetMoveAmount(this.MoveAmount()+.5)
            AnimaionPlace.AnimateStart(true)
            AnimaionPlace.SetDirectionState(false)
        }

        if(this.MoveState() === 3 && this.MoveAmount() < this.MAX_MOVE_LIMIT){
            this.SetPosition({x : this.Position().x, y : this.Position().y-move})
            this.SetMoveAmount(this.MoveAmount()+.5)
            AnimaionPlace.AnimateStart(true)
            AnimaionPlace.SetDirectionState(true)
  
        }

        if(this.MoveState() === 4 && this.MoveAmount() < this.MAX_MOVE_LIMIT){
            this.SetPosition({x : this.Position().x, y : this.Position().y+move})
            this.SetMoveAmount(this.MoveAmount()+.5)
            AnimaionPlace.AnimateStart(true)
            AnimaionPlace.SetDirectionState(false)
        }
       }
    }
}

export class Animal extends Entity{

    isHome : boolean
    cow : CowAnimate

    constructor(position : Position, dimentions : Dimensions){
        super("Sheep","baa", position, dimentions, false)
        this.isHome = false
        this.cow = new CowAnimate()
        
    }

    Img() : HTMLImageElement{
        return this.cow.Img();
    }

    SetHome(): void{
        this.isHome = true;
    }
    IsHome() : boolean{
        return this.isHome
    }

    Cow() : CowAnimate{
        return this.cow
    }
 

    Follow(player : Player) : void{
        const movement = 2.5;
        if(this.WithinRange(player) && !this.isHome){

            if(this.Position().x < player.Position().x-50){
                this.SetPosition({x : this.Position().x+movement, y : this.Position().y})
                this.Cow().AnimateStart(true)
                this.Cow().SetDirectionState(true)
            }
    
            if(this.Position().y < player.Position().y){
            this.SetPosition({x : this.Position().x, y : this.Position().y+movement})
            this.Cow().AnimateStart(true)
            this.Cow().SetDirectionState(false)

        }
  
            if(this.Position().x > player.Position().x+50){
                this.SetPosition({x : this.Position().x-movement, y : this.Position().y})
                this.Cow().AnimateStart(true)
                this.Cow().SetDirectionState(false)


            }
        
            if(this.Position().y > player.Position().y){
                this.SetPosition({x : this.Position().x, y : this.Position().y-movement})
                this.Cow().AnimateStart(true)
                this.Cow().SetDirectionState(false)
            }
        }
        else{
            this.Roaming(false, this.Cow())
        }
        this.Cow().AnimateStart(false)

      }
 



}