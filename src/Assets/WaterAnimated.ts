import frameOne from "../Assets/water-sheet.png"
import { Animate } from "./Animate";

export class WaterAnimated extends Animate {
    img : any
    animationIndex : number
    
    constructor(){
        super();
        this.img = new Image();
        this.SetImg(frameOne)
        this.animationIndex = 0;

    }

    AnimateStart(isAlive : boolean){
            //this.SetImg(this.Animate()[this.AnimationIndex()].frame)
            this.IncreaseAnimationIndex()

    }

    Img() {
        return this.img;
    }

    SetImg(img : string){
        this.img.src = img;
    }


    Animate(){
        const py = 400
            return [
                {sx : 0, sy : 0, px : py, py : py},
                {sx : 0, sy : 0, px : py, py : py},
                {sx : 0, sy : 0, px : py, py : py},
                {sx : 0, sy : 0, px : py, py : py},

                {sx : 400, sy : 0, px : py, py : py},
                {sx : 400, sy : 0, px : py, py : py},
                {sx : 400, sy : 0, px : py, py : py},
                {sx : 400, sy : 0, px : py, py : py},
                
                {sx : 800, sy : 0, px : py, py : py},
                {sx : 800, sy : 0, px : py, py : py},
                {sx : 800, sy : 0, px : py, py : py},
                
                {sx : 1200, sy : 0, px : py, py : py},
                {sx : 1200, sy : 0, px : py, py : py},
                {sx : 1200, sy : 0, px : py, py : py},
                {sx : 1200, sy : 0, px : py, py : py},


                {sx : 1600, sy : 0, px : py, py : py},
                {sx : 1600, sy : 0, px : py, py : py},
                {sx : 1600, sy : 0, px : py, py : py},
                {sx : 1600, sy : 0, px : py, py : py},
                
                {sx : 0, sy : 400, px : py, py : py},
                {sx : 0, sy : 400, px : py, py : py},
                {sx : 0, sy : 400, px : py, py : py},
                {sx : 0, sy : 400, px : py, py : py},

                {sx : 400, sy : 400, px : py, py : py},
                {sx : 400, sy : 400, px : py, py : py},
                {sx : 400, sy : 400, px : py, py : py},
                {sx : 400, sy : 400, px : py, py : py},

                {sx : 800, sy : 400, px : py, py : py},
                {sx : 800, sy : 400, px : py, py : py},
                {sx : 800, sy : 400, px : py, py : py},
                {sx : 800, sy : 400, px : py, py : py},


                // {sx : 1200, sy : 400, px : py, py : py},
                // {sx : 1200, sy : 400, px : py, py : py},

                // {sx : 1600, sy : 400, px : py, py : py},
                // {sx : 1600, sy : 400, px : py, py : py},



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