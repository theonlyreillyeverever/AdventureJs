

export class Clock{

    GetTime(){
       const timeStamp = new Date();
       return  timeStamp.getSeconds().toString()
    }

    UpdateTime(){
        return new Date();
    }
    
    ToMilliseconds(num : number){
        const time : number = (num * 1000)
        return time;
    }

}