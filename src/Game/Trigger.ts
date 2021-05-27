import { Enemy } from "../Types/Enemy"
import { Person } from "../Types/Person"


export class Trigger{
    triggered : boolean
    entity : Person 

    constructor(){
        this.entity = new Enemy("",0,{x:0,y:0},"right", {width: 0, height :0}, 0, "")
        this.triggered = false
    }

    SetTrigger(toggle : boolean){
        this.triggered = toggle
    }

    Triggered():boolean{
        return this.triggered
    }

    Transfer(entity : Person){
        this.entity = entity
    }

    SendTransfer(){
        return this.entity
    }

}