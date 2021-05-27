
import {GameObjects} from "./Objects"
import { Position } from "./Position"
import TreePng from "../Assets/tree.png"
import TreeCutPng from "../Assets/tree-cut.png"

import { GameObjectType } from "./GameObjectTypes"
import { Player } from "./Player"
import { Wood } from "./Items/Wood"

export class Tree extends GameObjects{
    wood : Wood | undefined = new Wood({x : 0, y : 0}) 
    constructor(position : Position){
        super(GameObjectType.TREE ,"tree", "brush", position, {width: 70, height : 70}, false, TreePng, true, 10)
    }


    ToggleImgState(){
        if(this.DoAction()){
            this.SetImg(TreeCutPng)
            this.SetCollected(true)
        }
    }

    Clear(){
        this.wood = undefined
    }

    Process(ply : Player){
        if(this.Collected() && this.wood !== undefined){
            ply.Inventory().AddItem(this.wood)
            this.Clear()

            return;
        }
    }

}