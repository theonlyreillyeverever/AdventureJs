import { GameObjectType } from "./Types/GameObjectTypes";
import { GameObjects } from "./Types/Objects";
import { Position } from "./Types/Position";
import Bushpng from "./Assets/bush.png"
import { Animate } from "./Assets/Animate";
import leaf from "./Assets/leaf-split.png"
import { Seed } from "./Types/Items/Farming/Seed";
import { Player } from "./Types/Player";
import { PlantedSeed } from "./Types/Items/PlantedSeed";



export class Bush extends GameObjects{
    bushAnimation : BushAnimate
    seed : Seed | undefined = new Seed({x : 0, y : 0}) 

    constructor(pos : Position){
        super(GameObjectType.BUSH, "Bush", "bss", pos, {width: 40, height : 40}, false, Bushpng, true, 1)
        this.bushAnimation = new BushAnimate();
    }


    TEST(context : any){
        context.beginPath();
        context.arc(this.Position().x, this.Position().y, 40, 0, 2 * Math.PI)
        context.stroke()
    }

    ToggleImgState(){
        if(this.DoAction()){
            this.SetImg(this.bushAnimation.Img().src)
            this.SetCollected(true)
        }
    }
    Animate(){
        return this.bushAnimation
    }

    Clear(){
        this.seed = undefined
    }

    Process(ply : Player){
        if(this.Collected() && this.seed !== undefined){
            const Groth =  new PlantedSeed(this.seed);
            ply.Inventory().AddItem(Groth)
            this.Clear()

            return;
        }

    }
}

export class BushAnimate extends Animate{
    constructor(){
        super();
        this.SetImg(leaf)
        this.SetPlayCount(1)
    }

    Animate(){
        const py = 150

        return [
            {sx : 0, sy : 100, px : 120, py : py},
            {sx : 0, sy : 100, px : 120, py : py},
            {sx : 0, sy : 100, px : 120, py : py},
            {sx : 0, sy : 100, px : 120, py : py},

            {sx : 100, sy : 100, px : 120, py : py},
            {sx : 100, sy : 100, px : 120, py : py},
            {sx : 100, sy : 100, px : 120, py : py},
            {sx : 100, sy : 100, px : 120, py : py},

            {sx : 200, sy : 100, px : 120, py : py},
            {sx : 200, sy : 100, px : 120, py : py},
            {sx : 200, sy : 100, px : 120, py : py},
            {sx : 200, sy : 100, px : 120, py : py},


            {sx : 100, sy : 200, px : 120, py : py},
            {sx : 100, sy : 200, px : 120, py : py},
            {sx : 100, sy : 200, px : 120, py : py},
            {sx : 100, sy : 200, px : 120, py : py},

            {sx : 200, sy : 300, px : 120, py : py},
            {sx : 200, sy : 300, px : 120, py : py},
            {sx : 200, sy : 300, px : 120, py : py},
            {sx : 200, sy : 300, px : 120, py : py},


            {sx : 600, sy : 300, px : 120, py : py},
            {sx : 600, sy : 300, px : 120, py : py},
            {sx : 600, sy : 300, px : 120, py : py},
            {sx : 600, sy : 300, px : 120, py : py},
        
        ]

    }
    
}