import { GameObjectType } from "./Types/GameObjectTypes";
import { GameObjects } from "./Types/Objects";
import { Position } from "./Types/Position";
import Bushpng from "./Assets/bush.png"
import { Animate } from "./Assets/Animate";
import leaf from "./Assets/leaf-split.png"
import { Seed } from "./Types/Items/Farming/Seed";
import { Player } from "./Types/Player";
import { PlantedSeed } from "./Types/Items/PlantedSeed";
import { NullObject } from "./Types/Items/NullObject";



export class Bush extends GameObjects{
    bushAnimation : BushAnimate
    seed : Seed | NullObject = new Seed({x : 0, y : 0}) 

    constructor(pos : Position){
        super(GameObjectType.BUSH, "Bush", "bss", pos, {width: 40, height : 40}, false, Bushpng, true, 1)
        this.bushAnimation = new BushAnimate();
    }


    ToggleImgState(){
        if(this.DoAction()){
            this.SetImg(this.bushAnimation.Img().src)
            this.SetCollected(true)
        }
    }

    Update(g : GameObjects){
        g.SetImg(this.bushAnimation.Img().src)

    }

    Animate(){
        return this.bushAnimation
    }

    Clear(){
        this.seed = new NullObject()
    }

    Process(ply : Player){
        if(this.Collected() && this.seed.Name() !== ""){
            this.SetImg(this.bushAnimation.Img().src)
            //this.SetCollected(true)
            const Groth =  new PlantedSeed(new Seed({x : 440, y : 420}), {x : 440, y : 420});
            ply.Inventory().AddItem(Groth)
            this.Clear()
            this.SetDoAction(false)

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