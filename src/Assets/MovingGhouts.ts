import MovingGhoutsImgLeft from "../Assets/movingGhouts (1).gif";
import MovingGhoutsImgRight from "../Assets/movingGhouts (2).gif";


export class GhoutGraphic{
    img : any
    animationIndex : number
    directionState : boolean

    
    constructor(){
        this.img = new Image();
        this.img.src = MovingGhoutsImgRight
        this.animationIndex = 0;
        this.directionState = true
        this.GraphicSet();
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
                this.SetImg(MovingGhoutsImgRight)
                break;
        
            case false:
                this.SetImg(MovingGhoutsImgLeft)
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
        this.GraphicSet()
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
            this.animationIndex = 0
        }
        return this.animationIndex
    }

    IncreaseAnimationIndex(){
        if(this.animationIndex >= this.Animate().length){
            this.animationIndex = 0
            return;
        }
        this.animationIndex++;
    }
}

