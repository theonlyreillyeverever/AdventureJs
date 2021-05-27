import CowSplitGif from "../Assets/cow-split.gif"
import CowSplitGifRight from "../Assets/cow-split-right.png"

export class Animate{
    img : any
    animationIndex : number
    directionState : boolean
    playCount : number = 0
    



    
    constructor(){
        this.img = new Image();
        this.animationIndex = 0;
        this.directionState = true
       /// this.GraphicSet();
    }

    SetPlayCount(num : number){
        this.playCount = num;
    }

    PlayCount(){

        return this.playCount
    }

    AnimateStart(isAlive : boolean){
        if(isAlive){
            this.IncreaseAnimationIndex()
        }
    }

    Img() {
        return this.img;
    }

    SetImg(img : string){
        this.img.src = img;
    }


    GraphicSet() : void{
        switch (this.DirectionState()) {
            case true:
                this.SetImg("")
                break;
        
            case false:
                this.SetImg("")
                break;
        }
    }

    DirectionState() : boolean{
        return this.directionState;
    }

    SetDirectionState(direction : boolean){
        this.directionState = direction
    }

    Animate(){
        const py = 150
        //this.GraphicSet()
        if(this.DirectionState()){
            return [
                {sx : 100, sy : 60, px : 120, py : py},
                {sx : 100, sy : 60, px : 120, py : py},
                {sx : 100, sy : 60, px : 120, py : py},
                {sx : 100, sy : 60, px : 120, py : py},

                {sx : 350, sy : 60, px : 120, py : py},
                {sx : 350, sy : 60, px : 120, py : py},
                {sx : 350, sy : 60, px : 120, py : py},
                {sx : 350, sy : 60, px : 120, py : py},
            ]
        }
        return [                
            {sx : 80, sy : 60, px : 120, py : py},
            {sx : 80, sy : 60, px : 120, py : py},
            {sx : 80, sy : 60, px : 120, py : py},
            {sx : 80, sy : 60, px : 120, py : py},

            {sx : 330, sy : 60, px : 120, py : py},
            {sx : 330, sy : 60, px : 120, py : py},
            {sx : 330, sy : 60, px : 120, py : py},
            {sx : 330, sy : 60, px : 120, py : py},
        ]
        

    }

    AnimationIndex(){
        if(this.animationIndex >= this.Animate().length){
            this.animationIndex = (this.playCount > 0 ? this.Animate().length-1 : this.animationIndex = 0)
        }
        return this.animationIndex
    }

    IncreaseAnimationIndex(){

        if(this.animationIndex >= this.Animate().length){
           this.animationIndex = (this.playCount > 0 ? this.Animate().length-1 : this.animationIndex = 0)
            return;
        }
        this.animationIndex++;
    }
}


export class CowAnimate extends Animate{
    constructor(){
        super()
        this.img.src = CowSplitGif
    }


    GraphicSet() : void{
        switch (this.DirectionState()) {
            case false:
                this.SetImg(CowSplitGif)
                break;
        
            case true:
                this.SetImg(CowSplitGifRight)
                break;
        }
    }

    Animate(){
        const py = 230
        this.GraphicSet()
        if(!this.DirectionState()){
            return [
                {sx : 0, sy : 10, px : py, py : py},
                {sx : 0, sy : 10, px : py, py : py},
                {sx : 0, sy : 10, px : py, py : py},
                {sx : 0, sy : 10, px : py, py : py},

                {sx : 250, sy : 10, px : py, py : py},
                {sx : 250, sy : 10, px : py, py : py},
                {sx : 250, sy : 10, px : py, py : py},
                {sx : 250, sy : 10, px : py, py : py},

                {sx : 500, sy : 10, px : py, py : py},
                {sx : 500, sy : 10, px : py, py : py},
                {sx : 500, sy : 10, px : py, py : py},
                {sx : 500, sy : 10, px : py, py : py},

                {sx : 750, sy : 10, px : py, py : py},
                {sx : 750, sy : 10, px : py, py : py},
                {sx : 750, sy : 10, px : py, py : py},
                {sx : 750, sy : 10, px : py, py : py},

            ]
        }
        return [              
            {sx : 790, sy : 10, px : py, py : py},
            {sx : 790, sy : 10, px : py, py : py},
            {sx : 790, sy : 10, px : py, py : py},
            {sx : 790, sy : 10, px : py, py : py},


            {sx : 540, sy : 10, px : py, py : py},
            {sx : 540, sy : 10, px : py, py : py},
            {sx : 540, sy : 10, px : py, py : py},
            {sx : 540, sy : 10, px : py, py : py},

            {sx : 290, sy : 10, px : py, py : py},
            {sx : 290, sy : 10, px : py, py : py},
            {sx : 290, sy : 10, px : py, py : py},
            {sx : 290, sy : 10, px : py, py : py},

            {sx : 40, sy : 10, px : py, py : py},
            {sx : 40, sy : 10, px : py, py : py},
            {sx : 40, sy : 10, px : py, py : py},
            {sx : 40, sy : 10, px : py, py : py},

     


           
        ]
        

    }
}
