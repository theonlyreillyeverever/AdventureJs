import { Person } from "../Types/Person";
import { TriggedEvent } from "./Response";
import { Trigger } from "./Trigger";



export class Observer<K>{
    protected trigger : Trigger
    protected event : TriggedEvent<K>

    constructor(){
        this.trigger = new Trigger()
        this.event = new TriggedEvent()
    }

    Trigger(): Trigger{
        return this.trigger
    }

    Observe(event : K){
        if(this.trigger.Triggered()){
            this.event.Process(event);
        }
    }

    Transfer(p : Person){
        
    }

}