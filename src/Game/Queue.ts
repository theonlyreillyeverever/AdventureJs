


export class Queue<T>{

    QueueArray : T[]

    constructor(){
        this.QueueArray = []
    }

    Enquene(item : T) : void{
        this.QueueArray.push(item)
    }

    
    Dequeue() : T | undefined{
        if(this.QueueArray.length <= 0){
            return;
        }
            const firstInQueue : T = this.QueueArray[0];
            const tmp = this.QueueArray.splice(1, this.QueueArray.length-1);
            this.QueueArray = tmp;
            return firstInQueue
        
    }


}