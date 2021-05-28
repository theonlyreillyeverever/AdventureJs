import { Key } from "readline";
import { GameObjectType } from "./GameObjectTypes";
import { Seed } from "./Items/Farming/Seed";
import {Item} from "./Items/Item"
import { NullObject } from "./Items/NullObject";
import { Bucket } from "./Items/Tools/Bucket";
import { GameObjects } from "./Objects";
import { WeaponUpgrade } from "./WeaponUpgrade";


export class Inventory {
    protected Inventory : Item[];
    protected inventorySize : number;
    protected selectedItemIndex : number
    protected hasKey : Key | undefined
    

    constructor(inventorySize : number){
        this.Inventory = [];
        this.inventorySize = inventorySize
        this.selectedItemIndex = 0
        this.hasKey = undefined

    }

    HasKey() : Key | undefined
    {
        if(this.hasKey === undefined){
            return;
        }
        return this.hasKey
    }

    SetKey(key : Key | undefined){
        this.hasKey = key;
    }

    SearchByName(name : string) : boolean{
            for(let i = 0;i< this.Inventory.length; i++){
                if(this.Inventory[i].Name() === name){
                    return true;
                }
            }

            return false
    }


    SetSelectItemindex(index : number) :void{
        if(this.CheckIfOverFlow(index)){
            return;
        }
        this.selectedItemIndex = index;
    }

    SelectedItemIndex() :number{
        return this.selectedItemIndex
    }

    CheckIfOverFlow(index : number) : boolean{
        if(index < 0 || index >= this.Inventory.length){
            return true;
        }
        return false
    }

    GetInventoryMaxSize() : number {
        return this.inventorySize;
    }

    GetInventory() : Item[]{
        return this.Inventory;
    }

    AddItem(newItem : Item){
        if(this.Inventory.length >= this.GetInventoryMaxSize()){
            console.log("Inventory is full, drop an item")
            return;
        }
        this.Inventory.push(newItem);
        console.log(newItem.name, " added!")
    }

    CompareInventories(currentInventory : Item[], tmpInventory : Item[]){
        
    }

    DropItem(Item : Item) : boolean{
        const tmpInventory : Item[] = []
        for(let i=0; i <  this.Inventory.length; i++){
            if(this.Inventory[i] === Item){}
            else{
                tmpInventory.push(this.Inventory[i])
            }
        }
        this.Inventory = tmpInventory;
        return false;
    }

    DropItemByIndex(index : number) : boolean{
        if(this.DropItem(this.Inventory[index])){
            return true;
        }
        return false;
    }

    

    CheckIfEmpty(value : Item[]) : boolean{
        if(value.length === 0){
            return true;
        }
        return false
    }

    InvertoryMax(value : Item[]) : boolean{
        if(value.length >= this.GetInventoryMaxSize()){
            return true;
        }

        return false;

    }

    CheckIfNull(value : Item[]) : boolean{
        if(value === null){
            return true;
        }
        return false;

    }

    ViewInventory() : void {
        if(this.CheckIfEmpty(this.Inventory) || this.CheckIfNull(this.Inventory)){
            console.log("Inventory does not exist")
            return;
        }

        console.log(this.CheckIfEmpty(this.Inventory))
        for(let i=0; i<this.Inventory.length; i++){ 
                    console.log(this.Inventory[i]?.name)
        }
    }   
}

export class InventoryObjects {
    protected Inventory : GameObjects[];
    protected inventorySize : number;
    protected selectedItemIndex : number
    protected hasKey : Key | undefined
    protected selectedItem : GameObjects
    

    constructor(inventorySize : number){
        this.Inventory = [];
        this.inventorySize = inventorySize
        this.selectedItemIndex = 0
        this.hasKey = undefined
        this.selectedItem = new NullObject()

    }


    SetSelectedItem(item : GameObjects){
        this.selectedItem = item
    }

    SelectedItem() : GameObjects{
        return this.selectedItem
    }

    HasKey() : Key | undefined
    {
        if(this.hasKey === undefined){
            return;
        }
        return this.hasKey
    }

    SetKey(key : Key | undefined){
        this.hasKey = key;
    }



    SearchByName(name : string) : number{
            for(let i = 0;i< this.Inventory.length; i++){
                if(this.Inventory[i].Name() === name){
                    return i;
                }
            }

            return -1
    }
    

    SetSelectItemindex(index : number) :void{
        if(this.CheckIfOverFlow(index)){
            return;
        }
        this.selectedItemIndex = index;
    }

    SelectedItemIndex() :number{
        return this.selectedItemIndex
    }

    CheckIfOverFlow(index : number) : boolean{
        if(index < 0 || index >= this.Inventory.length){
            return true;
        }
        return false
    }

    GetInventoryMaxSize() : number {
        return this.inventorySize;
    }

    GetInventory() : GameObjects[]{
        return this.Inventory;
    }

    AddItem(newItem : GameObjects | Bucket | Seed){
        if(this.Inventory.length >= this.GetInventoryMaxSize()){
            console.log("Inventory is full, drop an item")
            return;
        }
        this.Inventory.push(newItem);
        console.log(newItem.name, " added!")
    }

    CompareInventories(currentInventory : Item[], tmpInventory : Item[]){
        
    }

    GetByName(name : string) : GameObjects | null{
        for(let i = 0;i< this.Inventory.length; i++){
            if(this.Inventory[i].Name() === name){
                return this.Inventory[i];
            }
        }

        return null
}

    DropItem(Item : GameObjects) : boolean{
        const tmpInventory : GameObjects[] = []
        for(let i=0; i <  this.Inventory.length; i++){
            if(this.Inventory[i] === Item){}
            else{
                tmpInventory.push(this.Inventory[i])
            }
        }
        this.Inventory = tmpInventory;
        return false;
    }

    DropItemByIndex(index : number) : boolean{
        if(this.DropItem(this.Inventory[index])){
            return true;
        }
        return false;
    }

    

    CheckIfEmpty(value : GameObjects[]) : boolean{
        if(value.length === 0){
            return true;
        }
        return false
    }

    InvertoryMax(value : GameObjects[]) : boolean{
        if(value.length >= this.GetInventoryMaxSize()){
            return true;
        }

        return false;

    }

    CheckIfNull(value : GameObjects[]) : boolean{
        if(value === null){
            return true;
        }
        return false;

    }

    ViewInventory() : void {
        if(this.CheckIfEmpty(this.Inventory) || this.CheckIfNull(this.Inventory)){
            console.log("Inventory does not exist")
            return;
        }

        console.log(this.CheckIfEmpty(this.Inventory))
        for(let i=0; i<this.Inventory.length; i++){ 
                    console.log(this.Inventory[i]?.name)
        }
    }

    
}