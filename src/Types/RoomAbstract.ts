import { Doorway } from "../Levels/Doorway";
import { Enemy } from "./Enemy";
import { Food } from "./Food";
import { Weapon } from "./Weapon";
import {Layout } from "../Types/Layout"



export interface RoomAbstract {
        id : number
        name : string
        description: string   
        backdrop: string
        doorways : Doorway[]
        layout : Layout
        foodList : Food[],
        weaponList : Weapon[],
        enemyList : Enemy[]

            Id() : number
            Name() : string
            Description() : string
            BackDrop() : string

            Doorways() : Doorway[]
            Layout() : Layout
            FoodList() : Food[]
            WeaponList() : Weapon[]
            EnemyList() : Enemy[]

            RemoveFood() : void
            RemoveWeapon() : void
            RemoveEnemy() : void
            setFood(newFood : Food[]) : void
}