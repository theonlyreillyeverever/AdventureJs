


export class EntityLevel {
    level : number
    constructor(level : number){
        this.level = level
    }

    SetLevel(levelUp : number){
        if(levelUp <= this.level){
            return;
        }
        this.level = levelUp;
    }

    CurrentLevel(){
        return this.level
    }

}