
import { Player } from "../Types/Player";
import {Position} from "../Types/Position"
import w from "../Assets/wall.png"
import { Entity, Animal } from "../Types/Entity";
import { Animate } from "../Assets/Animate";
import { EntityInGame } from "./EntityInGame";
import { WaterAnimated } from "../Assets/WaterAnimated";
import { Person } from "../Types/Person";


export class GameObjetsAbstract {
        protected position : Position 
        protected canHurt : boolean
        protected moveable : boolean
        protected img : any
        protected isAnimated : boolean
        protected allowPass : boolean
        protected value : number
        protected animal : Animal
        protected wm : WaterAnimated

        constructor(x : number, y : number, canHurt : boolean, animated : boolean, allowPass : boolean, value : number){
                this.position = {x : x, y : y}
                this.moveable = true
                this.canHurt = canHurt
                this.img = new Image();
                this.isAnimated = animated
                this.allowPass = allowPass
                this.value = value
                this.animal = new Animal({x : 0, y : 0} , {width : 0, height : 0})
                this.wm = new WaterAnimated()
            }

            Value() : number{
                    return this.value
            }

            WaterAnimated(): WaterAnimated{
           
                    return this.wm
            }

        
            Animal(){
                    return this.animal
            }
            SetAnimal(ani : Animal){
                this.animal = ani;
            }

        Animate(){}

        AllowPass(){
                return this.allowPass
        }

        SetAllowPass(togglePass : boolean){
                this.allowPass = togglePass;
        }
        
        IsAnimated(){
                return this.isAnimated
        }

        Position() : Position
        {
                return this.position
        }

        SetPosition(pos : Position){
                this.position = pos
        }

        CanMove() : boolean{
                return this.moveable
        }
        CanHurt(): boolean
        {
                return this.canHurt
        }
        MoveBlock(player : Player) : void{
                return;
        }

        SetImg(newImage : string){
                this.img.src = newImage
        }


        SetNewImg(img : any){
                this.img = img
            }
        

        Img(){
                return this.img
            }


        Process() : any{
                this.SetPosition({x : this.Position().x, y: this.Position().y+1})

        }
        
        DetectCollition(player : Player | Entity | Person){

                const width = player.Dimensions().width;
                const height = player.Dimensions().height
                const single = this

                if(!this.AllowPass()){

                        if(player.Position().x+width === single.Position().x && (player.Position().y >= single.Position().y && player.Position().y <= single.Position().y+height)){
                                player.SetPosition({x : player.Position().x-10, y : player.Position().y})
                                if(single.CanHurt()){}
                        }
                        else if(player.Position().x === single.Position().x+width && (player.Position().y >= single.Position().y && player.Position().y <= single.Position().y+height)){
                                player.SetPosition({x : player.Position().x+10, y : player.Position().y})
                        }
                        else if(player.Position().y+height === single.Position().y && (player.Position().x >= single.Position().x && player.Position().x <= single.Position().x+width)){
                                player.SetPosition({x : player.Position().x, y : player.Position().y-10})
                        }
                        else if(player.Position().y === single.Position().y+height && (player.Position().x >= single.Position().x && player.Position().x <= single.Position().x+width)){
                                player.SetPosition({x : player.Position().x, y : player.Position().y+10})
                        }
                }
        }


        CheckValidInput(list : GameObjetsAbstract[][], index : number, subIndex : number ): boolean{
                if(list[index][subIndex] !== undefined){
                        return true;
                }

                return false;

        }

        DetectCollitionArray(list : GameObjetsAbstract[][], ani : Animal){
                list.forEach((w : GameObjetsAbstract[], index : number) => {
                        w.forEach((single : GameObjetsAbstract, subIndex : number) => {
                                        single.DetectCollition(this.Animal())
                                
                                
                        })
                })

               // this.DetectCollition
        }
        
}