import { Bush } from "../../Bush";
import { Seed } from "./Farming/Seed";
import { WaterItem } from "./Farming/Water";
import { GameObjects } from "../Objects";
import { NullObject } from "./NullObject";
import { GameObjectType } from "../GameObjectTypes";
import { Position } from "../Position";




export class PlantedSeed extends GameObjects {
    water : WaterItem 
    isPlanted : boolean
    hasWater : boolean
    isGrowing : boolean
    plantState : Bush | Seed | NullObject
    grown : boolean;
    bush : Bush

    constructor(seed : Seed | NullObject, position: Position){
        super(GameObjectType.PLANT, "Grow", "bsuh", position, {width: 30, height : 30}, false, seed.Img().src, true, 0)
        this.water = new NullObject()
        this.isGrowing = false
        this.isPlanted = true;
        this.hasWater = false;
        this.isGrowing = false
        this.grown = false
        this.plantState = seed
        this.bush = new Bush(position)
    }

    Grown() : boolean{
        return this.grown
    }


    Animate(){
        return this.CastBush().Animate()
    }

    
    CastBush() : Bush{
        return (this.plantState as Bush)

    }    

    SetPlantState(){
        if(this.isGrowing){
            const currentPosition = this.plantState.Position()
            this.plantState = this.bush
            this.SetPosition(this.plantState.Position())
            this.SetImg(this.plantState.Img().src)
            this.grown = true
            this.type = this.plantState.Type()
            this.SetCollected(true)
        }
    }

    Name(){
        this.name = this.plantState.Name()
        return this.plantState.Name()
    }



    PlantState() :  Bush | Seed | NullObject {



        if(!this.grown){
            this.Grow();
            this.SetPlantState();
        }

        return this.plantState
    }

    Grow() : void{
        const p : Seed = this.plantState as Seed
        if(p.HasWater()){
            this.isGrowing = true
            return;
        }

        this.isGrowing = false
    }
}