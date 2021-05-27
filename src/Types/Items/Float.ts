import { Item } from "./Item";


export class Float{
    floating : Item
    state : Boolean
    floatMax : number
    floatIncrement : number
    count : number
    constructor(item : Item){
        this.floating = item
        this.state = false
        this.floatMax = .5
        this.floatIncrement = 0.1
        this.count = 0
    }

    setItem(item : Item){
        this.floating = item
    }

    ToggleState(){
        if(this.state){
            this.state = false
            return;
        }
        this.state = true;
        this.count = 0
    }

    StateChange(){
        if(this.count >= this.floatMax){
            this.ToggleState()
            return;
        }
    
    }

    Floating(item : Item){
        this.floating = item
        this.StateChange()


        console.log(this.floating)

    }
}