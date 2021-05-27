
import { Doorway } from "../Levels/Doorway";
import { Enemy } from "./Enemy";
import { Food } from "./Food";
import {RoomAbstract} from "./RoomAbstract"
import { Weapon } from "./Weapon";
import {Layout } from "../Types/Layout"
import { Villager } from "./Villager";
import {GameObjects} from "./Objects"

export class Room implements RoomAbstract{
    id: number;
    name: string;
    description: string;
    backdrop: string;
    doorways: Doorway[];
    layout: Layout;
    foodList: Food[];
    weaponList: Weapon[];
    enemyList: Enemy[];
    VillagerList : Villager[];
    gameObjects : GameObjects[]


    constructor(id : number, name : string, description: string, backdrop : string, layout : Layout, 
        doorways : Doorway[] ,foodList: Food[], weaponList : Weapon[], enemyList: Enemy[], VillList : Villager[],
        gameObjects : GameObjects[]
        
        ){
        
        this.id = id
        this.name = name;
        this.description = description
        this.backdrop = backdrop;
        this.layout = layout;
        this.doorways = doorways
        this.foodList = foodList
        this.weaponList = weaponList
        this.enemyList = enemyList
        this.VillagerList = VillList
        this.gameObjects = gameObjects;
    }


    GameObjects() :  GameObjects[]{
        return this.gameObjects;
    }


    Id(): number {
        return this.id
    }
    Name(): string {
        return this.name;
    }
    Description(): string {
        return this.description
    }
    BackDrop(): string {
        return this.backdrop
    }
    Doorways(): Doorway[] {
        return this.doorways
    }
    Layout(): Layout {
        return this.layout
    }
    FoodList(): Food[] {
        return this.foodList
    }
    WeaponList(): Weapon[] {
        return this.weaponList
    }
    EnemyList(): Enemy[] {
        return this.enemyList
    }

    setFood(newfood : Food[]) : void
    {
        this.foodList = newfood;
    }

    Villagers() : Villager[]{
        return this.VillagerList;
    }

    RemoveFood(): void {
        throw new Error("Method not implemented.");
    }
    RemoveWeapon(): void {
        throw new Error("Method not implemented.");
    }
    RemoveEnemy(): void {
        throw new Error("Method not implemented.");
    }

}