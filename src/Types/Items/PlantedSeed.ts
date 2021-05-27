import { Bush } from "../../Bush";
import { Item } from "./Item";
import { Seed } from "./Farming/Seed";
import { WaterItem } from "./Farming/Water";
import { NullItem } from "./NullItem";
import { GameObjects } from "../Objects";
import { NullObject } from "./NullObject";
import { GameObjectType } from "../GameObjectTypes";




export class PlantedSeed extends GameObjects {
    seed : Seed
    water : WaterItem 
    isPlanted : boolean
    hasWater : boolean
    isGrowing : boolean

    constructor(seed : Seed){
        super(GameObjectType.BUSH, "Grow", "bsuh", {x : 0, y : 0}, {width: 0, height : 0}, false, "", true, 0)
        this.seed = seed
        this.water = new NullObject()
        this.isGrowing = false
        this.isPlanted = true;
        this.hasWater = false;
        this.isGrowing = false
       // this.SetImg(seed.Img().src)
    }


    PlantState() :  GameObjects  {
        if(this.isGrowing){
            return new Bush(this.seed.Position())
        }
        return this.seed

    }

    Grow() : void{
        if(this.seed.HasWater()){
            this.isGrowing = true
            return;
        }

        this.isGrowing = false


    }



}