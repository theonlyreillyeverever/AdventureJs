import { EntityLevel } from "../EntityLevel";
import { ExperiencePoints } from "../ExperiencePoints";


/**
 * Base Class
 */
export class Skills{

    skillName : string
    experience : ExperiencePoints
    level : EntityLevel

    constructor(skill : string){
        this.skillName = skill
        this.level = new EntityLevel(1)
        this.experience = new ExperiencePoints(this.level);
    }

    Skill() : string {
        return this.skillName
    }

    ExperiencePoints() : ExperiencePoints{
        return this.experience
    }

    SkillLevel(){
        return this.level
    }

}