import { Animate } from "../Assets/Animate";
import { GameObjects } from "../Types/Objects";
import { Player } from "../Types/Player";



export const CanvasDraw = {
    Draw : (i : GameObjects, context : any) => {
        if(!i.Collected()){
            context.drawImage(i.Img(), i.Position().x, i.Position().y, i.Dimensions().width, i.Dimensions().height)
        }
       },

       DrawRect : (o : GameObjects, context : any, {fillColor, hasStroke} : any = {}) => {

            const {x, y} =  o.Position()
            const {width, height} =  o.Dimensions()

            if(hasStroke === undefined && fillColor === undefined){
                hasStroke = true;
            }
            context.beginPath();
            context.rect(x,y,width,height)
            if(fillColor !== undefined){
                    context.fillStyle = fillColor
                    context.fillRect(x,y, width, height);
            }

            if(hasStroke){
                context.stroke();
            }
       },

       DrawArc : () => {

       },

       Animation : (AnimationList : Animate, baseObject : GameObjects, context : any) => {
        if(baseObject.Collected()){
                AnimationList.AnimateStart(baseObject.Collected())
                context.drawImage(baseObject.Img(), 
                AnimationList.Animate()[AnimationList.AnimationIndex()].sx,
                AnimationList.Animate()[AnimationList.AnimationIndex()].sy,
                AnimationList.Animate()[AnimationList.AnimationIndex()].px,
                AnimationList.Animate()[AnimationList.AnimationIndex()].py,
                baseObject.Position().x, baseObject.Position().y, baseObject.Dimensions().width, baseObject.Dimensions().height)
        }
       },

       TextAboveObject : (input : string, object : GameObjects | Player, context : any) => {
           const {x, y} = object.Position()
            context.fillText(input, x, y-20);

       }
}