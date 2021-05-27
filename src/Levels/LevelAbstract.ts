import {Food} from "../Types/Food"
import {Weapon} from "../Types/Weapon"
import {Enemy} from "../Types/Enemy"
import { Room } from "../Types/Room"

// import {ItemFactory} from "../Types/ItemFactory"
// import {EnemyFactory} from "../Types/EnemyFactory"


export interface LevelAbstract {
    id : number
    name : string
    description : string
    rooms : Room[]
    

    Id() : number
    Name() : string
    Description() : string
    Rooms() : Room[]

}