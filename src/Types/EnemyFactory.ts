import {Enemy} from "./Enemy"
import Demon from "../Assets/demon-split.gif"
import { Boss } from "./Enemies/BossAnimate"


export class EnemyFactory {

    BuildEnemy(input : number, x : number, y : number) : Enemy{
    switch (input) {
        case 0:{
            const BadMan = new Enemy("Bad Man", 200, {x : x, y: y}, "right", {width : 200, height : 200}, 1,"")
            BadMan.setImg(Demon)
            console.log(BadMan.Img())
            return BadMan
        }

        case 1:{
            const BadMan = new Enemy("followman", 200, {x : x, y: y}, "right", {width : 50, height : 50}, 1, Demon)
            BadMan.setImg(Demon)

            return BadMan
        }

        case 2: {
            const BOSS = new Boss({x : x, y : y})
            return BOSS
        }
        default:{
            const BadMan = new Enemy("Bad Man", 200, {x : 10, y: 15}, "right",  {width : 50, height : 50}, 1, Demon)
            BadMan.setImg(Demon)

            return BadMan
        }
    }

}


}