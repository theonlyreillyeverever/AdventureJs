import { GameObjectType } from "./GameObjectTypes"
import { ItemFactory } from "./ItemFactory"
import { Item } from "./Items/Item"
import { NullItem } from "./Items/NullItem"
import { NullObject } from "./Items/NullObject"
import { GameObjects } from "./Objects"
import { Player } from "./Player"
import { Position } from "./Position"



export class PlaceObject{
    placeObject : boolean
    selectedKey : Position
    ItemsPlaced : GameObjects[]
    singleItem : GameObjects

    constructor(){
        this.placeObject = false
        this.selectedKey = {x : 0, y : 0}
        this.ItemsPlaced = [];
        this.singleItem = new NullObject()
    }

    setPosition(pos : Position){
        this.selectedKey = pos
    }

    Pos(){
        return this.selectedKey
    }



    PlaceObject(){
        return this.placeObject
    }

    SetPlaceObject(b : boolean){
            this.placeObject = b
    }

    SetSelectedItem(item : GameObjects){
        this.singleItem = item;
    }

    Item() : GameObjects{

        return this.singleItem
    }


    SelectArea(key : number, player : Player) : void{
        const ply = player.Position()
        const plyDim = player.Dimensions()
        switch(key){
            case 38: {
                this.setPosition({
                    x : ply.x,
                    y : ply.y-plyDim.height})
                break;
            }
            case 39: {
                this.setPosition({

                    x : ply.x+plyDim.width,
                    y : ply.y
                })
                break;
            }
            case 40: {
                this.setPosition({
                    x : ply.x,
                    y : ply.y+plyDim.height
                })
                break
            }
            case 37: {
                 this.setPosition({
                    x : ply.x-plyDim.width,
                    y : ply.y
                })
                break;
            }
            default: {
                this.setPosition({
                    x : this.Pos().x,
                    y : this.Pos().y
                })
                break;
            }
        }
    }

}