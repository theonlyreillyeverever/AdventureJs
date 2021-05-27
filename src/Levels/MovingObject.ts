import { GameObjects } from "../Types/Objects";
import w from "../Assets/wood-board.png"
import { Player } from "../Types/Player";
import { Position } from "../Types/Position";
import { GameObjectType } from "../Types/GameObjectTypes";



export class MovingObejct extends GameObjects{
    toggleMove : boolean
    constructor(name : string, position: Position){
        super(GameObjectType.MOVEABLE,name, "can cross", {x : position.x, y: position.y}, {width: 100, height: 100}, false, w, true, 0)
        this.toggleMove = false;
    }


    WithinObject(ply : Player): boolean{
        if((ply.Position().x >= this.Position().x && ply.Position().x <= this.Position().x+this.Dimensions().width) &&
            ply.Position().y >= this.Position().y && ply.Position().y <= this.Position().y+this.Dimensions().height
        ){
            console.log(this.Name())
            return true
        }


        return false;
    }

    Process(ply : Player){
        this.ToggleState()

        if(this.toggleMove){
             this.SetPosition({x : this.Position().x+10, y : this.Position().y})
        }
        else{
            this.SetPosition({x : this.Position().x-10, y : this.Position().y})

        }

                if(this.WithinObject(ply)){

                if(ply.Position().x >= this.Position().x+this.Dimensions().width-50){
                    ply.SetPosition({x : ply.Position().x-10, y : ply.Position().y})
                }
                if(ply.Position().x <= this.Position().x){
                    ply.SetPosition({x : ply.Position().x+10, y : ply.Position().y})
                }
                this.ToggleState()

                if(this.toggleMove){
                   // ply.SetPosition({x : ply.Position().x+10, y : ply.Position().y})
                }
                else{
                 //   ply.SetPosition({x : ply.Position().x-10, y : ply.Position().y})

                }
            }
    }

    ToggleState(){
        if(this.Position().x >= 300){
            this.toggleMove = false;
        }
        else if(this.Position().x <= 100){
            this.toggleMove = true
        }
    }
}