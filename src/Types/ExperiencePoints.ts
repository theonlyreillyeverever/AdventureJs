import { METHODS } from "http";
import { EntityLevel } from "./EntityLevel"




export class ExperiencePoints {
        protected experiencePoints : number
        protected entityLevel : EntityLevel
        protected EXPONENT_MAX : number = 4
        protected expienceFed : boolean

        constructor(level : EntityLevel ){
            this.experiencePoints = 100
            this.entityLevel = level;
            this.expienceFed = false
        }

        CurrentXP() : number{
            return this.experiencePoints;
        }

        CanLevelUp(currentLevel : number, pointsNeeded : number) : boolean{
            if(currentLevel >= pointsNeeded){
                return true;
            }
            return false;
        }

        AddXP(xp : number){
            if(this.LevelUp()){
                return;
            }
            this.experiencePoints += xp;
        }

        ResetXP(){
            this.experiencePoints = 0
        }

        LevelUp(){
            const currentLevel = this.entityLevel.CurrentLevel();
            if(this.CanLevelUp(this.experiencePoints, this.ExperiencePointsNeeded())){
                this.entityLevel.SetLevel(currentLevel+1);
                this.ResetXP();
                return true
            }
            return false
        }

        ExperiencePointsNeeded(){
            const currentLevel = this.entityLevel.CurrentLevel();
            const pointsNeeded = Math.pow(currentLevel, this.EXPONENT_MAX);
            return pointsNeeded;
        }

        CalculatePercentage(){
            const max = this.ExperiencePointsNeeded();
            const divBy = this.CurrentXP();
            const percent = (divBy / max) * 100
            return percent;
        }

        XPFedToggle(){
            if(!this.expienceFed){
                this.expienceFed = true
            }
        }

        XPFed(){
            return this.expienceFed;
        }


}
