import { idText } from "typescript"
import { Item } from "../Types/Items/Item"
import { GameObjects } from "../Types/Objects"
import { Player } from "../Types/Player"
import { Position } from "../Types/Position"
import { Doorway } from "./Doorway"
import { GameObjetsAbstract } from "./WallObejctsAbstract"



export class Stage {
   private id : number
   private gameLayout : GameObjetsAbstract[][]
   private gameObjects : GameObjects[][]
   private stageName : string
   private backdrop : string
   private doorways : Doorway[]
   private placedItems : GameObjects[]
   private playerPosition: Position

    constructor(id : number, stageName : string, gameLayout : GameObjetsAbstract[][], gameObjects : GameObjects[][], backdrop : string, doorways : Doorway[], playerPosition: Position){
        this.id = id
        this.stageName = stageName
        this.gameLayout = gameLayout
        this.gameObjects = gameObjects
        this.backdrop = backdrop
        this.doorways = doorways
        this.placedItems = []
        this.playerPosition = playerPosition

    }

    UpdatePlayerState(player : Player){
        player.SetPosition(this.playerPosition)
    }

    Id() : number {
        return this.id
    }

    StageName() : string {
        return this.stageName
    }

    GameLayout() : GameObjetsAbstract[][]{
        return this.gameLayout
    }

    GameObjects() : GameObjects[][]{
        return this.gameObjects
    }

    PlacedItems() : GameObjects[]{
        return this.placedItems
    }

    UpdateItems(newList : GameObjects[]){
        this.placedItems = newList
    }

    AddSetItem(item : GameObjects){
        this.placedItems.push(item)
    }

    UpdateSingleRowInGameObejcts(list : GameObjects[], index: number){
        console.log(this.gameObjects[index])
        console.log(list)

       // this.gameObjects[index] = list;
    }


    RemoveGameObject(index: number, obj : GameObjects){
        this.gameObjects[index].push(obj)

    }

    RemoveItem(itemIndex : number){
        const currentItems = this.placedItems;
        const copy = this.placedItems;

        const tempList : GameObjects[] = []
        tempList.concat(currentItems.splice(0, itemIndex), copy.splice(itemIndex+1, currentItems.length-1))

        this.UpdateItems(tempList)
    }

    ReplaceItem(i : number, newItem : GameObjects){
        const currentItems = this.placedItems;
        currentItems[i] = newItem
        this.UpdateItems(currentItems)
    }
    

    Backdrop() : string{
        return this.backdrop
    }

    Doorways() : Doorway[]{
        return this.doorways
    }
    
}