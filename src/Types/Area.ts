import { Enemy } from "./Enemy";
import { Item } from "./Items/Item";
import { GameObjects } from "./Objects"
import { Player } from "./Player"



export class Area {



    
    
    WithinRange(player: Player, object : GameObjects | Enemy | Item, distance : number) : boolean{
        if(distance <= 0){
            distance = 50
        }

         if((player.Position().x >= object.Position().x-distance && player.Position().x <= object.Position().x+object.Dimensions().width+distance)
         && (player.Position().y >= object.Position().y-distance && player.Position().y <= object.Position().y+object.Dimensions().height+distance)){
            //object.SetWithinRange(true)

            return true
        }
        else if((player.Position().x >= object.Position().x && player.Position().x <= object.Position().x+object.Dimensions().width+distance)
        && (player.Position().y >= object.Position().y && player.Position().y <= object.Position().y+object.Dimensions().height)){
           //object.SetWithinRange(true)
           return true
       }
      //  object.SetWithinRange(false)
        return false
    }


    WithinRangePlayer(player: Player, object : any) : boolean{
        if(player.Position().x >= object.Position().x-200 && player.Position().x <= object.Position().x && 
            player.Position().y >= object.Position().y-200 && player.Position().y <= object.Position().y
        ){            //console.log("range one")
            return true

        }
        else if(player.Position().x >= object.Position().x && player.Position().x <= object.Position().x+100 &&
        player.Position().y >= object.Position().y && player.Position().y <= object.Position().y+200
        ){
            return true
        }
        //console.log("range noen")
        return false
    }
}