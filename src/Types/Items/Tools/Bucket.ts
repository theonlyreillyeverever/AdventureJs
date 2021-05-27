import { WaterItem } from "../Farming/Water";
import { Position } from "../../Position";
import { Item } from "../Item";
import { NullItem } from "../NullItem";
import BucketEmpty from "../../../Assets/emptyBucket.png"
import BucketFull from "../../../Assets/fullBucket.png"
import { Seed } from "../Farming/Seed";
import { GameObjects } from "../../Objects";
import { GameObjectType } from "../../GameObjectTypes";
import { NullObject } from "../NullObject";



export class Bucket extends GameObjects{

    Contents : WaterItem
    filled : boolean

    constructor(position : Position){
        super(GameObjectType.TOOL,"Bucket", "holds water", position, {width : 30, height : 30}, false, BucketEmpty, true , 0)
        this.Contents = new NullObject()
        this.filled = false
    }

    IsFilled() : boolean{
        return this.filled
    }

    FillBucket(Water : WaterItem){
        if(this.filled){
            return;
        }
        this.Contents = Water
        this.SetImg(BucketFull);
        this.filled = true;

    }

    UseBucketContents(item : Seed){
        if(!this.filled){
            return;
        }

        item.AddWater(this.Contents)
        this.Contents = new NullObject()
        this.SetImg(BucketEmpty);
        this.filled = false;

    }


    
}