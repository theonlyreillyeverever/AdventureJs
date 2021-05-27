import { Enemy } from "../Types/Enemy";
import { EnemyFactory } from "../Types/EnemyFactory";
import { GameObjectType } from "../Types/GameObjectTypes";
import { GameObjects } from "../Types/Objects";
import { Position } from "../Types/Position";


export class EnemyAdoptor extends GameObjects{

    enemy : Enemy
    constructor(enemyType : number, pos : Position){
        super(GameObjectType.ENEMY,"", "", {x : pos.x, y : pos.y}, {width : 200, height : 200 }, false, "", true, 0)
        this.enemy = new EnemyFactory().BuildEnemy(2, this.Position().x, this.Position().y)
        //this.SetImg(this.enemy.Img().src)

    }   



    Enemy(){
        return this.enemy
    }
}