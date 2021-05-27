import { createThis } from "typescript";
import { Clock } from "./Clock";
import {grassJpg, grassDark} from "../Assets/grass"


export class DayNight{
    isDay : boolean
    time : Clock
    DayToNight : number
    count : number;
    currentTime : number
    constructor(){
        this.time = new Clock()
        this.isDay = true;
        this.DayToNight = this.time.ToMilliseconds(300);
        this.count = 0;
        this.currentTime = this.time.UpdateTime().getMinutes();
        this.DayTime()
    }

    DayNightImg(){
        if(this.isDay){
            return grassJpg
        }
        return grassDark
    }

    ToggleDay(){
        if(this.isDay){
            this.isDay = false
            return;
        }
        this.isDay = true
    }
    


    DayTime(){
        const UpdatedClock = setInterval(() => {
        const currentTimeStamp = this.time.UpdateTime();
            if(this.count >= this.time.ToMilliseconds(6)){
                this.ToggleDay();
                this.DayNightImg()
                console.log(this.isDay)
                this.count = 0
                

            }
        this.count += 1
       // console.log(this.count ," ",this.time.ToMilliseconds(.6))
        }, this.time.ToMilliseconds(1))
    }


}