import { Dimensions } from "./Dimensions"
import { Position } from "./Position"
import { GameObjects } from "./Objects"
import {Doorway} from "../Levels/Doorway"
import {Room} from "../Types/Room"
import {HouseIcon} from "../Assets/HouseImg"
import { GameObjectType } from "./GameObjectTypes"
import { Player } from "./Player"
import { Level } from "../Levels/Level"
import { BuildLevel } from "../Levels/BuildLevels"



export class House extends GameObjects {
    id : number
    constructor(id : number,position : Position){
        super(GameObjectType.HOUSE, "House", "test house", position, {width: 130, height: 130}, false, HouseIcon, false, 0)
        this.id = id
    }

    Id(){
        return this.id;
    }

    DetectCollition(player : Player){
        const o = this
        if((player.Position().x === (o.Position().x+o.Dimensions().width-30))&&
        (player.Position().y >= o.Position().y && player.Position().y <= (o.Position().y+o.Dimensions().height/2)+10)
        ){
            player.SetPosition({x : player.Position().x+10, y : player.Position().y})
        }

        if((player.Position().x === (o.Position().x-30))&&
        (player.Position().y >= o.Position().y && player.Position().y <= (o.Position().y+o.Dimensions().height/2)+10)
        ){
            player.SetPosition({x : player.Position().x-10, y : player.Position().y})
        }


        if((player.Position().y === (o.Position().y+o.Dimensions().height-50)) &&
        (player.Position().x >= o.Position().x && player.Position().x <= (o.Position().x+o.Dimensions().width-50))
        ){
            player.SetPosition({x : player.Position().x, y : player.Position().y+10})
        }

        if((player.Position().y === (o.Position().y)) &&
        (player.Position().x >= o.Position().x && player.Position().x <= (o.Position().x+o.Dimensions().width-50))
        ){
            player.SetPosition({x : player.Position().x, y : player.Position().y-10})
        }
    }

    DoorwayRender()
    {
        return {
            x : this.Position().x+60, y : this.Position().y+90, w : 30, h: 30
        }
    }

    Enter(player: Player){
        if(player.Position().x === this.DoorwayRender().x && player.Position().y === this.DoorwayRender().y){
            
        }
    }

    EnterHouse(LevelList : BuildLevel, player : Player){
        try{
            LevelList.SetRoomState(this.id);
            
        }
        catch(e){

        }

    }



}

