import {Wall} from "../Levels/Walls"
import {Water} from "../Levels/Water"
import {MoveableBlock} from "../Levels/MoveableBlock"
import { GameObjetsAbstract } from "../Levels/WallObejctsAbstract";
import { Bridge } from "../Levels/Bridge";
import { EntityInGame } from "../Levels/EntityInGame";
import { Dirt } from "../Levels/Dirt";
import { GameObjects } from "./Objects";
import { Swith } from "./Swith";
import { House } from "./House";
import { Tree } from "./Tree";
import { Enemy } from "./Enemy";
import { EnemyAdoptor } from "../Adoptor/EnemyAdoptor";
import { WeaponAdoptor } from "../Adoptor/WeaponAdoptor";
import { Bush } from "../Bush";
import { HouseFloor } from "../Levels/HouseFloor";


export class Layout {
    Walls : number[][];
    WALL : GameObjetsAbstract[][] = []
    gameObjects : GameObjects[][] = []
    houseId : number = 1;



    constructor(Walls : number[][], Objects : number[][]){
        this.Walls = Walls
        const WallTmp : GameObjetsAbstract[][] = []
        const ww : GameObjetsAbstract[] = []
        const mapObjectsTmp : GameObjects[][] = []
        const mapObjects : GameObjects[]  = []

        this.Walls.forEach((w : number[], index : number) => {
            w.forEach((value : number, subIndex : number) => {
                if(value === 1){
                    const tmp = new Wall(index*50, subIndex*50);
                    ww.push(tmp);
                }

                if(value === 2){
                   const tmp = new Water({x: index*50, y :subIndex*50});
                    ww.push(tmp);
                    /// console.log(ww)
                }

                 if(value === 3){
                    const tmp = new MoveableBlock(index*50, subIndex*50, false);
                     ww.push(tmp);
                     //console.log(ww)
                }

                if(value === 4){
                    const tmp = new Bridge({x: index*50, y :subIndex*50});
                     ww.push(tmp);
                     //console.log(ww)

                }
                if(value === 5){
                    const tmp = new EntityInGame({x: index*50, y :subIndex*50}, false, 5);
                    ww.push(tmp);
                }

                if(value === 6){
                    const tmp = new Dirt({x: index*50, y :subIndex*50});
                    ww.push(tmp);                
                }

                if(value === 7){
                    const tmp = new HouseFloor({x: index*50, y :subIndex*50});
                    ww.push(tmp);                
                }
            })
        });
        WallTmp.push(ww);
        this.WALL = WallTmp
        //console.log(this.WALL)

        Objects.forEach((w : number[], index : number) => {
            w.forEach((value : number, subIndex : number) => {

                if(value === 2){
                    const s : Tree = new Tree({x: index*50, y :subIndex*50})
                    mapObjects.push(s);                
                }

                if(value === 3){
                    const s : House = new House(this.houseId,{x: index*50, y :subIndex*50})
                    this.houseId = this.houseId + 1
                    mapObjects.push(s);                
                }
                if(value === 4){
                    const s : Swith = new Swith({x: index*50, y :subIndex*50})
                    mapObjects.push(s);                
                }
                
                if(value === 5){
                    const s : EnemyAdoptor = new EnemyAdoptor(2,{x: index*50, y :subIndex*50})
                    mapObjects.push(s);                
                }

                if(value === 6){
                    const s : Bush = new Bush({x: index*50, y :subIndex*50})
                    mapObjects.push(s);                
                }
                if(value === -1){
                    const s : WeaponAdoptor = new WeaponAdoptor(1, {x: index*50, y :subIndex*50})
                    mapObjects.push(s);                
                }

                if(value === 7){
                    
                    const s : WeaponAdoptor = new WeaponAdoptor(0, {x: index*50, y :subIndex*50})
                    mapObjects.push(s);                
                }
            })
        })
        mapObjectsTmp.push(mapObjects)
        this.gameObjects = mapObjectsTmp;

    }

    BuildWalls() : GameObjetsAbstract[][]{
        return this.WALL
    }

    BuildObjects() : GameObjects[][]{
        return this.gameObjects
    }
    
}

/**
 * [
 *  1111111111111
 *  1000000000001
 *  1000000000001
 *  1000000000001
 *  1000000000001
*  1111111111111
 * ]
 * 
 * 
 * 
 */