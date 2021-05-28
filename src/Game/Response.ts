
import {GameObjetsAbstract} from "../Levels/WallObejctsAbstract"


export class TriggedEvent<T>{

    Process(event : T){
        const e = event as unknown
        const f = e as GameObjetsAbstract
        f.Process()

    }

    TransferResponise(p : GameObjetsAbstract){
        
    }


}