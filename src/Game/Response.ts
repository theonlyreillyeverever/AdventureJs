
import {GameObjetsAbstract} from "../Levels/WallObejctsAbstract"
import { Person } from "../Types/Person"


export class TriggedEvent<T>{

    Process(event : T){
        const e = event as unknown
        const f = e as GameObjetsAbstract
        f.Process()

    }

    TransferResponise(p : GameObjetsAbstract){
        
    }


}