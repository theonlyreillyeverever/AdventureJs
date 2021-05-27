import { Position } from "../Types/Position";
import { GameObjetsAbstract } from "./WallObejctsAbstract";
import {Entity, Animal} from "../Types/Entity"


export class EntityInGame extends GameObjetsAbstract{

   protected type : number
   protected cow : Animal


    constructor(position : Position, canHurt : boolean, type : number){
        super(position.x, position.y, canHurt, true, false, 5)
        this.type = type
        this.cow = new Animal({x : position.x, y : position.y}, {width: 50, height : 50})
       // this.SetNewImg(this.cow.Img());
       this.SetAnimal(this.cow)
    }
    
    Animal() : Animal{
        return this.cow;
    }

    Img(){
        return this.cow.Img();
    }





}