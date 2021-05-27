import { Animate } from "../../Assets/Animate";
import { Enemy } from "../Enemy";
import { Position } from "../Position";
import BossOne from "../../Assets/boss-one.png"

export class Boss extends Enemy{
    MonsterAnimate : Animate
    constructor(pos : Position){
        super("King", 10000, pos, "right", {width : 100, height : 100}, 200, "")
        this.MonsterAnimate = new Animate();
        this.MonsterAnimate.SetImg(BossOne)
        this.setImg(this.MonsterAnimate.Img().src)
    }


    

    Animate(){
        const py  = 500
        if(this.Hit()){
        return [
            {sx : 0, sy : 1024, px : py, py : py},
            {sx : 0, sy : 1024, px : py, py : py},
            {sx : 0, sy : 1024, px : py, py : py},
            {sx : 0, sy : 1024, px : py, py : py},
    

            {sx : 512, sy : 1024, px : py, py : py},
            {sx : 512, sy : 1024, px : py, py : py},
            {sx : 512, sy : 1024, px : py, py : py},
            {sx : 512, sy : 1024, px : py, py : py},

            {sx : 1024, sy : 1024, px : py, py : py},
            {sx : 1024, sy : 1024, px : py, py : py},
            {sx : 1024, sy : 1024, px : py, py : py},
            {sx : 1024, sy : 1024, px : py, py : py},
        
            {sx : 1536, sy : 1024, px : py, py : py},
            {sx : 1536, sy : 1024, px : py, py : py},
            {sx : 1536, sy : 1024, px : py, py : py},
            {sx : 1536, sy : 1024, px : py, py : py},
        ]
    }



        return [                
            {sx : 0, sy : 0, px : py, py : py},
            {sx : 0, sy : 0, px : py, py : py},
            {sx : 0, sy : 0, px : py, py : py},
            {sx : 0, sy : 0, px : py, py : py},
    

            {sx : 512, sy : 0, px : py, py : py},
            {sx : 512, sy : 0, px : py, py : py},
            {sx : 512, sy : 0, px : py, py : py},
            {sx : 512, sy : 0, px : py, py : py},

            {sx : 1024, sy : 0, px : py, py : py},
            {sx : 1024, sy : 0, px : py, py : py},
            {sx : 1024, sy : 0, px : py, py : py},
            {sx : 1024, sy : 0, px : py, py : py},
        
            {sx : 1536, sy : 0, px : py, py : py},
            {sx : 1536, sy : 0, px : py, py : py},
            {sx : 1536, sy : 0, px : py, py : py},
            {sx : 1536, sy : 0, px : py, py : py},



        ]



    }

}