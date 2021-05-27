import { WaterItem } from "../Farming/Water";
import { Position } from "../../Position";
import { Item } from "../Item";
import SeedImg from "../../../Assets/coin-shine1.gif"
import { Player } from "../../Player";
import { NullItem } from "../NullItem";
import { GameObjects } from "../../Objects";
import { GameObjectType } from "../../GameObjectTypes";



export class Seed extends GameObjects{

    water : WaterItem | NullItem


    constructor(pos : Position){
        super(GameObjectType.PLANT,"Seed", "Grows bush", pos,{width : 30, height:30}, false, SeedImg, true, 0)
        this.water = new NullItem()
    }

    HasWater() : boolean{
        if(this.water.Name() !== ""){
            return true;
        }

        return false
    }

    AddWater(water : WaterItem){
        this.water = water;
    }

    Use(){

    }


    Options(){
        if(this.HasWater()){
            return ""
        }
        return "1) Add water"
    }

}