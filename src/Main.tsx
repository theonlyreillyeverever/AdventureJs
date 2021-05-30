import { useEffect, useRef, useState } from "react"
import { Player } from "./Types/Player"
import { Controller } from "./Types/Controller"
import { Enemy } from "./Types/Enemy"
import {Level} from "./Levels/Level"
import {Doorway} from "./Levels/Doorway"
import {BuildLevel} from "./Levels/BuildLevels"
import { WaterItem } from "./Types/Items/Farming/Water"
import { Seed } from "./Types/Items/Farming/Seed"

import { GameObjetsAbstract } from "./Levels/WallObejctsAbstract"
import { Weapon } from "./Types/Weapon"
import NightMode from "./Assets/nightmode.png"
import { Bullet } from "./Types/Bullet"
import { DayNight } from "./Game/DayNight"
import { GameObjects, OBJECTSTATE } from "./Types/Objects"
import {Observer} from "./Game/TriggedEvent"
import { GameObjectType } from "./Types/GameObjectTypes"
import { WeaponAdoptor } from "./Adoptor/WeaponAdoptor"
import { House } from "./Types/House"
import { Bush, BushAnimate } from "./Bush"
import { Car } from "./Cart"

import { Bucket } from "./Types/Items/Tools/Bucket"
import { PlantedSeed } from "./Types/Items/PlantedSeed"
import { Animate } from "./Assets/Animate"
import { stringify } from "querystring"
import { StringDecoder } from "string_decoder"
import { CanvasDraw } from "./Game/Render"
import { NullObject } from "./Types/Items/NullObject"

const Main = () => {

    const au = require("./audio/game.mp3")
    const audio = new Audio(au.default);
    //audio.play()
    const canvasRef = useRef<any>(null);
    const carTest = new Car();


    const LevelsList = new BuildLevel()
    const [player, setPlayer] = useState<Player>(new Player("Player", 100, {x : 130, y : 100}, {width : 50, height : 50}))

    const WeaponLIST : Weapon[] = []

    const dayNight = new DayNight();
    const ObserverClass = new Observer<GameObjetsAbstract>()
    const testlIST : GameObjects[] = [new Bucket({x : 200, y :110})]
    const Timmer : number = 1

    const gameLevels : Level[] = [
        LevelsList.BuildLevelTwo()
    ]
    



   //console.log(gameLevels[gameState].Rooms()[roomState].Layout().BuildWalls())
    useEffect(() => {
        const canvas = canvasRef?.current;
        canvas.width = 1300 ;
        canvas.height = 700;
        canvas.style.width = 1300
        canvas.style.height = 700

    }, [])


    useEffect(() => {
        let mounted = false;
        if(!mounted){
        const PlyController = new Controller(0, player);

        }
        return () => {
            mounted = true;
        }

    }, [player])

    
//{x: 650, y: 1970}

    const ClearContext = (context : any) => {
        context.clearRect(0,0,  canvasRef.current.width, canvasRef.current.height)
    }



   const RenderList = (context : any)  =>{

    testlIST.forEach(( w : GameObjects, index : number)=> {
            if(!w.Collected()){
                context.drawImage(w.Img(), w.Position().x, w.Position().y, 50, 50)
                player.CollectItem(w)
            }
        })



        
   }


   const renderLayout = (context : any)  => {
    const height = 50
    const width = 50

    LevelsList.GameLayout(gameLevels).forEach((w : GameObjetsAbstract[], index : number) => {
        w.forEach((single : GameObjetsAbstract, subIndex : number) => {
            if(single.Value() === 4){
//                ObserverClass.Observe(w[subIndex])
            }
            if(single.Value() === 5 ){
                //DisplayMessage(single.Value().toString(), true, context)

                context.drawImage(single.Animal().Cow().Img(), 
                single.Animal().Cow().Animate()[single.Animal().Cow().AnimationIndex()].sx,
                single.Animal().Cow().Animate()[single.Animal().Cow().AnimationIndex()].sy,
                single.Animal().Cow().Animate()[single.Animal().Cow().AnimationIndex()].px,
                single.Animal().Cow().Animate()[single.Animal().Cow().AnimationIndex()].py,
                single.Animal().Position().x, single.Animal().Position().y, single.Animal().Dimensions().width, single.Animal().Dimensions().height)
                        single.Animal().Follow(player)
                
                single.DetectCollitionArray(LevelsList.GameLayout(gameLevels), single.Animal())
                context.fillStyle = "red"
                context.fillText((single.Animal().Position().x + " "  + single.Animal().Position().y), single.Animal().Position().x, single.Animal().Position().y)

        }



        else if(single.Value() === 2){
   
                    single.DetectCollition(player)  
  
            context.save()
               /// context.transform(1, -0.1, 1.2, .5, 0.4, 0);a
            context.drawImage(single.Img(),
            single.WaterAnimated()?.Animate()[single.WaterAnimated()?.AnimationIndex()].sx,
            single.WaterAnimated()?.Animate()[single.WaterAnimated()?.AnimationIndex()].sy,
            single.WaterAnimated()?.Animate()[single.WaterAnimated()?.AnimationIndex()].px,
            single.WaterAnimated()?.Animate()[single.WaterAnimated()?.AnimationIndex()].py
            ,single.Position().x, single.Position().y, width, height)

            //coll.Animation(single.WaterAnimated(), single, context)    


            single.Animate();
            context.restore()
            const itemIndex = player.Inventory().SearchByName("Bucket")
            if(itemIndex !== -1){
                if( (player.Position().x+60 === single.Position().x) &&
                                player.Position().y >= single.Position().y && player.Position().y <= single.Position().y+50
                ){
                    const b : Bucket = player.Inventory().GetInventory()[itemIndex] as Bucket
                    if(!b.IsFilled()){
                        b.FillBucket(new WaterItem({x : 0, y : 0}));
                        context.beginPath()
                        context.rect(single.Position().x, single.Position().y, 50, 50);
                        context.stroke()    
                    }
               }
            }
           // DisplayMessage(((player.Position().x).toString() + " "+ (single.Position().x-50)), true, context)
        }

        else{
            single.DetectCollition(ObserverClass.Trigger().SendTransfer())
           

            single.MoveBlock(player)
            single.DetectCollition(player)  
            //single.Animate();
            context.drawImage(single.Img(),single.Position().x, single.Position().y, width, height)
                }
        })    
    });
   }


   let v = 360
   const ShowHitLocation = (context : any, x : number) => {
    if(player.PlayerAttack()){
    context.beginPath()

    context.save()
    context.translate(player.Position().x+50, player.Position().y+5);
    context.rotate(250 * Math.PI / 130)

    context.rotate(x * Math.PI / (v-=x))
    context.scale(1,1)

    context.drawImage(player.CurrentWeapon().Img(), 0, 0 , 30, 30);

    context.restore()

    context.stroke();
  //  console.log(x)
    }
    if(x >= 20){
       player.SetPlayerAttack(false)
       pizza = 0
       v = 360
       //alert("ru")
    }


}

   //Displays attack
   const Attack = (context : any) => {
        if(player.PlayerAttack()){
            ShowHitLocation(context, pizza)
            pizza=pizza+0.7        }
   }

   let pizza = 0.1
   const GameObjects = (context : any)  => {
       context.save()
      // context.transform(0, 0, 0, .5, 0.5, 0.5);

    LevelsList.GameObjects(gameLevels).forEach((e : GameObjects[], index : number) => {
            e.forEach((o : GameObjects, subIndex : number) => {
                const inRange = o.Area(player, 0);

                if(o.Type() === GameObjectType.SWITCH){

                    if(inRange){
                        //coll.PerformAction(o, player, inRange)
                    }

                }



                if(o.Type() === GameObjectType.TREE){

                    if(inRange && player.CurrentWeapon().Name() === "Axe"){
                       player.IsInRange(inRange)
                       player.SetDoAction(o)
                       o.Process(player)
                    }
                    CanvasDraw.Draw(o, context)
                }

                
                if(o.Type() === GameObjectType.ENEMY){
                    if(o.Enemy().IsAlive()){
                        const inRange = o.Area(player, 200);
                        if(inRange){
                        DisplayMessage(o.Enemy().Health().toString(), inRange, context);
                        ObserverClass.Trigger().Transfer(o.Enemy());
                        //o.Enemy().Follow(player) 
                        //o.Enemy().AttackInProgress(player)
                        //player.AttackInProgress(o.Enemy())
                    }

                    o.Enemy().AnimateEnemy()
                    o.Enemy().SetIsAttacking(inRange)
                    CanvasDraw.Animation(o.Enemy().Animate(), o, context)


                   // context.drawImage(o.Enemy().Img(), o.Enemy().Animate()[o.Enemy().AnimationIndex()].sx, o.Enemy().Animate()[o.Enemy().AnimationIndex()].sy, o.Enemy().Animate()[o.Enemy().AnimationIndex()].px, o.Enemy().Animate()[o.Enemy().AnimationIndex()].py ,o.Enemy().Position().x, o.Enemy().Position().y, o.Enemy().Dimensions().width, o.Enemy().Dimensions().height)
                    }
                    else{
                                    if(!o.Enemy().XP().XPFed()){
                                        player.XP().AddXP(20);
                                        o.Enemy().XP().XPFedToggle();
                                    }
                                }
                }


                if(o.Type() === GameObjectType.HOUSE){
                    const houseCast : House = o as House
                    houseCast.DetectCollition(player)
                    context.beginPath()
                    context.rect(houseCast.DoorwayRender().x, houseCast.DoorwayRender().y, houseCast.DoorwayRender().w, houseCast.DoorwayRender().h);
                    context.stroke()

                    if(player.Position().x === houseCast.DoorwayRender().x && player.Position().y === houseCast.DoorwayRender().y){
                        houseCast.EnterHouse(LevelsList, player)
                        LevelsList.UpdatePlayerState(gameLevels, player)

                    }
                    //CanvasDraw.Draw(o, context);

                }

                if(o.Type() === GameObjectType.BUSH){
                    const BushCast = o as Bush
                    if(inRange && player.CurrentWeapon().Name() !== ""){
                        //DisplayMessage((index + " " + subIndex).toString(), true, context)
                        player.IsInRange(inRange)
                        player.SetDoAction(o)
                        o.Process(player)


                    }
                        CanvasDraw.Draw(o, context)
                        CanvasDraw.Animation(BushCast.Animate() , o, context)    

                    
                }



                if(o.Type() === GameObjectType.WEAPON){
                    const xx = (o as unknown) as WeaponAdoptor
                    const cast = xx.Weapon();
                
              
                    if(inRange){

                        player.CollectWeapon(cast)
                    }

                    if(!cast.Collected()){
                        CanvasDraw.Draw(o, context)


                        //context.drawImage(o.Img(), cast.Position().x, cast.Position().y, 30, 30)
                    }
                }


                else{
                  //  pizza = 0
                    const xDistance = o.Position().x - player.Position().x
                    const yDistance = o.Position().y - player.Position().y

                }


            })
            
            
    }) 
    context.restore()
        
   }

   const coll = {

    

        PerformAction : (i : GameObjects, player : Player, inRange : boolean, BushCast : Animate, context : any) => {
            
            player.IsInRange(inRange)
            player.SetDoAction(i)
            i.Process(player)

            if(i.Collected()){
                alert("bro")
                CanvasDraw.Animation(BushCast , i, context)    
            }
        },

       Collect : (i : GameObjects, player: Player, inRange : boolean, context : any)=> {
        switch(i.Type()){
            case GameObjectType.PLANT :{
                if(!(i as PlantedSeed).Grown() && player.DoAction()?.DoAction()){
                    (player.Inventory().GetInventory()[player.Inventory().SearchByName("Bucket")] as Bucket)
                     .UseBucketContents(i.PlantState() as Seed)
                    player.DoAction()?.SetDoAction(false)    
                    return;
                }
                break;  
            }
            case GameObjectType.BUSH :{
                    const cast : PlantedSeed  = (i as PlantedSeed)
                    const BushCast : Bush =  (cast.PlantState() as Bush)
                    if(inRange && player.CurrentWeapon().Name() !== "" && player.DoAction()?.DoAction()){
                        //DisplayMessage((index + " " + subIndex).toString(), true, context)
                        player.IsInRange(inRange)
                        player.SetDoAction(BushCast)
                        BushCast.Process(player)
                    }
                        // if(!BushCast.Collected()){
                        //     CanvasDraw.Draw(i, context)


                        // }
                        CanvasDraw.Animation(BushCast.Animate(), i, context)    


                    
                        break;  

                }

                    //coll.PerformAction(i, player, inRange, cast.Animate(), context )
            
            
            default : {

               // console.log("nigga faggit ", i.Type())
            }
        }

        i.DrawObject(context)
       },


   }

   const CheckIfCollected = (o : GameObjects, index : number) => {
       if(o.Collected()){
        LevelsList.RemovePlacedItem(index ,gameLevels)
       }
   }

   

   const RenderPlacedItems = (context : any) => {
       //console.log( LevelsList.PlacedItems(gameLevels))
        LevelsList.PlacedItems(gameLevels).forEach((i : GameObjects, index : number) => {
            const inRange : boolean = i.Area(player, 0)
            player.IsInRangeItem(inRange, new NullObject())

            if(inRange){
                player.IsInRangeItem(inRange, i)            
                //CanvasDraw.DrawRect(i, context)
                //CanvasDraw.TextAboveObject((inRange ? "true" : "false"), i, context)
            }
                if(i.Type() === GameObjectType.PLANT){
                    if(!(i as PlantedSeed).Grown() && player.DoAction()?.DoAction()){
                        (player.Inventory().GetInventory()[player.Inventory().SearchByName("Bucket")] as Bucket)
                         .UseBucketContents(i.PlantState() as Seed)
                        player.DoAction()?.SetDoAction(false)    
                    }
                    i.DrawObject(context)
                }

                if(i.Type() === GameObjectType.BUSH ){
                    const BushCast = (i as PlantedSeed).PlantState();
                    if(inRange && player.CurrentWeapon().Name() !== "" && player.DoAction()?.DoAction()){
                        //DisplayMessage((index + " " + subIndex).toString(), true, context)
                        player.IsInRange(inRange)
                        player.SetDoAction(BushCast)
                        BushCast.Process(player)
                    }
                    if(!BushCast.Collected()){
                            BushCast.DrawObject(context)
                    }
                    CanvasDraw.Animation((BushCast as Bush).Animate()  , BushCast, context)    
                    CheckIfCollected(BushCast, index)
                        
                }  
        })
   }

   const DisplayMessage = (pain : string, m : boolean, context: any) => {
    if(m){
        context.beginPath()
        context.fillStyle = "white"
        context.fillRect(player.Position().x, player.Position().y - 30, 80, 25)
        context.stroke();
        context.fillStyle = "black"
        context.fillText(pain, player.Position().x, player.Position().y - 20);
    }

   }

   const ViewInventory = (context : any) => 
   {
    if(player.ViewInventory()){
                   
        context.beginPath();
        context.rect(player.Position().x +9, player.Position().y - 90, 250, 230)
        context.fillStyle = "white"
        context.fillRect(player.Position().x + 9, player.Position().y - 90, 250, 230)
        context.stroke()
        context.fillStyle = "black";
        context.fillText("Items", player.Position().x + 15, player.Position().y - 70)

        for(let i = 0; i < player.Inventory().GetInventoryMaxSize(); i++){
            context.beginPath();
            context.rect(player.Position().x+35 + (i*45), player.Position().y - 60, 20, 20)
            context.fillStyle = (player.Inventory().SelectedItemIndex() === i ? "blue" : "red")
            context.fillRect(player.Position().x+35 + (i*45), player.Position().y - 60, 20, 20)
            if(player.Inventory().GetInventory()[i] !== undefined){
                context.drawImage(player.Inventory().GetInventory()[i].Img(), player.Position().x+35 + (i*45), player.Position().y - 60, 20, 20)

            }

            context.stroke()
            context.fillStyle = "black";
            context.fillText((player.Inventory().GetInventory()[i]?.name === undefined ? "" : player.Inventory().GetInventory()[i]?.name), player.Position().x+35 + (i*45), player.Position().y - 30)
        }

        context.fillText("Skills", player.Position().x + 15, player.Position().y - 10)



    }

   }

   const ViewSpeach = (message : string) => 
   {
       const lineHight : number = 10;
       
       const textBreak : string[] = message.split('\n');
    const context = canvasRef.current.getContext('2d');
    if(player.Speak()){
                   
        context.beginPath();
        context.rect(player.Position().x - 5, player.Position().y + 10, 200, 100)
        context.fillStyle = "white"
        context.fillRect(player.Position().x - 5, player.Position().y + 10, 200, 100)
        context.stroke()
            context.fillStyle = "black";
            for(let i = 0 ; i < textBreak.length; i++){
                context.fillText(textBreak[i], player.Position().x , (player.Position().y+ 30) + (i*lineHight))
            }

    }
   }

   const NightModeRender =(context: any) =>{

       const nightmode = new Image();
       nightmode.src = NightMode
        context.drawImage(nightmode, player.Position().x- 130, player.Position().y - 140, 600, 300)

   }

   const Shooting = (context : any) => {
    const a = player.PushBuillet()
        a.forEach((b : Bullet, index : number) => {
            player.Shoot(b)
            context.fillStyle = "red"

            context.beginPath();
            context.arc(b.Position().x, b.Position().y , 5, 0 ,2 * Math.PI,true);
            context.fill()
            context.stroke()
        })
  
       
   }

   

   const RenderHealthBarPlayer = (context : any) => {

        context.beginPath();
        context.rect(player.Position().x - 80, player.Position().y - 80, 100, 20);
        context.fillStyle = "red"
        context.fillRect(player.Position().x - 80, player.Position().y - 80, 100, 20);
        context.stroke()

        context.beginPath();
        context.rect(player.Position().x - 80, player.Position().y - 80, player.Health(), 20);
        context.fillStyle = "green"
        context.fillRect(player.Position().x - 80, player.Position().y - 80, player.Health(), 20);
        context.stroke()

        context.beginPath();
        context.rect(player.Position().x - 80, player.Position().y - 60, 100, 5);
        context.fillStyle = "blue"
        context.fillRect(player.Position().x - 80, player.Position().y -60, player.XP().CalculatePercentage(), 5);
        context.stroke()

   }

//    const EnmeyAttack = () =>{
//     const context = canvasRef.current.getContext('2d');

//        const width = player.Dimensions().width
//        const height = player.Dimensions().height
//     gameLevels[gameState].Rooms()[roomState].EnemyList().forEach((e : Enemy, index : number) => {
//         if(e.IsAlive()){
//             e.SetIsAttacking(e.WithinRange(player))
//     if(player.Position().x+width === e.Position().x && (player.Position().y >= e.Position().y && player.Position().y <= e.Position().y+height)){
//             player.SetHealth(player.Health()-e.HitPoints())
//             player.SetPosition( {x : player.Position().x-10, y: player.Position().y})
//             context.fillStyle = "red";

//             //DisplayMessage("-"+e.HitPoints())   

//     }
//     else if(player.Position().x === e.Position().x+width && (player.Position().y >= e.Position().y && player.Position().y <= e.Position().y+height)){
//         player.SetHealth(player.Health()-e.HitPoints())
//         context.fillStyle = "red";
//         player.SetPosition( {x : player.Position().x+10, y: player.Position().y})


//         //DisplayMessage("-"+e.HitPoints())   

//     }
//     else if(player.Position().y+height === e.Position().y && (player.Position().x >= e.Position().x && player.Position().x <= e.Position().x+width)){
//         player.SetHealth(player.Health()-e.HitPoints())
//         context.fillStyle = "red";
//         player.SetPosition( {x : player.Position().x, y: player.Position().y-10})

//         //DisplayMessage("-"+e.HitPoints())   

//     }
//     else if(player.Position().y === e.Position().y+height && (player.Position().x >= e.Position().x && player.Position().x <= e.Position().x+width)){
//         player.SetHealth(player.Health()-e.HitPoints())
//         context.fillStyle = "red";
//         player.SetPosition( {x : player.Position().x-10, y: player.Position().y+10})

//        // DisplayMessage("-"+e.HitPoints())   

//     }
// }
    
// })
//    }

//    const RenderVillager = () => {
//     const context = canvasRef.current.getContext('2d');
//     gameLevels[gameState].Rooms()[roomState].Villagers().forEach((v : Villager, index : number) => {
//         if(v.SpeakWith(player)){
//             DisplayMessage("Speak with " + v.Name(), v.SpeakWith(player))
//             player.SetSpeak(true);

//             if(player.ViewMessage()){
//                 ViewSpeach(v.Message())
//                 console.log(" near ", v.Name())
//             }
//         }
//         else{

//         }

//         const villagerView = new Image();
//         villagerView.src = v.DisplayIcon()     
//         context.drawImage(villagerView, v.Position().x, v.Position().y, v.Dimensions().width, v.Dimensions().height)
//         v.Roaming(player.ViewMessage())
//     })
//    }  
   
   
   const PlaceObject = (context : any) => {

       if(player.PlaceObject().PlaceObject()){
            context.beginPath()
            context.fillStyle = "red"
            context.rect(player.PlaceObject().Pos().x, player.PlaceObject().Pos().y, player.Dimensions().width, player.Dimensions().height)
           context.drawImage(player.PlaceObject().Item().Img(), player.PlaceObject().Pos().x, player.PlaceObject().Pos().y, player.Dimensions().width, player.Dimensions().height)
            context.stroke();
        }

        if(player.PlaceObject().Item().State() === OBJECTSTATE.READY){
            if(player.PlaceObject().Item().Name() !== ""){
                player.PlaceObject().Item().SetPosition({ x : player.PlaceObject().Pos().x, y : player.PlaceObject().Pos().y})
                LevelsList.PlaceItemInLevel(player.PlaceObject().Item(), gameLevels);
                player.PlaceObject().SetSelectedItem(new NullObject());
 
            }

        }

    }



//    const Attack = () => {
//     const context = canvasRef.current.getContext('2d');
//     const b = player.PushBuillet()

//        if(player.PlayerAttack() || player.Shooting()){

//         context.drawImage(player.CurrentWeapon().Img(), player.Position().x + 30, player.Position().y , 20, 20);

//         gameLevels[gameState].Rooms()[roomState].EnemyList().forEach((e : Enemy, index : number) => {
//             const a = player.PushBuillet()
//             a.forEach((b : Bullet, index : number) => {
//           if(player.Shooting() && (b.Position().x >= e.Position().x && b.Position().x <= e.Position().x+e.Dimensions().width) && (b.Position().y  >= e.Position().y && b.Position().y  <= e.Position().x+e.Dimensions().height) ){
//                 e.SetHealth(20)
//                 console.log("health: ",e.Health())
//                 //DisplayMessage("-20")
//                 e.SetPosition({x : e.Position().x+10, y : e.Position().y})
//                 player.SetShooting(false)

//             }
//             })
            
//             if(player.PlayerAttack() && (player.Position().x + 50 >= e.Position().x && player.Position().x <= e.Position().x+e.Dimensions().width) && (player.Position().y  >= e.Position().y && player.Position().y  <= e.Position().x+e.Dimensions().height) ){
//                 e.SetHealth(player.CurrentWeapon().AttackPoints())
//                 e.SetPosition({x : e.Position().x+10, y : e.Position().y})
//                 //DisplayMessage(player.CurrentWeapon().AttackPoints().toString())

           
//             }

//             else{
//             }
//             if(e.Health() <= 0){
//                 e.SetIsAlive(false)
//             }
//         })
//     }
//     if(!player.PlayerAttack()){

//     //player.CurrentWeapon().SetRotation(0)
//     }
//    }


//    const renderEnemy = () => {
//     const context = canvasRef.current.getContext('2d');
//     gameLevels[gameState].Rooms()[roomState].EnemyList().forEach((e : Enemy, index : number) => {
     
//         if(e.IsAlive()){
//                 context.drawImage(e.Img(), e.Animate()[e.AnimationIndex()].sx, e.Animate()[e.AnimationIndex()].sy, e.Animate()[e.AnimationIndex()].px, e.Animate()[e.AnimationIndex()].py ,e.Position().x, e.Position().y, e.Dimensions().width, e.Dimensions().height)
//                 e.AnimateEnemy()
//                 e.Follow(player);
//             }
//         else{
//             if(!e.XP().XPFed()){
//                 player.XP().AddXP(20);
//                 e.XP().XPFedToggle();
//             }
//         }

        
//     });
//    }

   const DisplayEnemyHealthBar = (context : any, e : Enemy) => {
    context.save();
    context.beginPath();
    context.rect(e.Position().x - 20, e.Position().y - 20, 100, 5);
    context.fillStyle = "red"
    context.fillRect(e.Position().x - 20, e.Position().y - 20, 100, 5);

    context.stroke()
    context.beginPath();
    context.rect(e.Position().x - 20, e.Position().y - 20, e.Health(), 5);
    context.fillStyle = "green"
    context.fillRect(e.Position().x - 20, e.Position().y - 20, e.Health(), 5);
    context.stroke()
    context.restore()
     
   }

   const RenderExits = (context : any) => {


    LevelsList.Doorways(gameLevels).forEach((d : Doorway, index : number) => {
        context.beginPath();
        context.fillStyle = "black"
        if(d.IsVert()){
            context.fillRect(d.Position().x, d.Position().y , 50, 100);
        }
        else{
            context.fillRect(d.Position().x, d.Position().y , 100, 50);

        }
        if(player.Position().x === d.Position().x ){
     
            LevelsList.SetRoomState(d.Pathway());
            LevelsList.UpdatePlayerState(gameLevels, player)


            
        }

    })

        

   }


   const DisplayOptions = (context : any) => {
        context.beginPath();
        context.rect(player.Position().x+ 330, player.Position().y-85, 30, 30);
        context.fillStyle = "red"
        context.fillRect(player.Position().x+330, player.Position().y-85, 30, 30);
        context.stroke()


        context.drawImage(player.CurrentWeapon().Img(), player.Position().x+335, player.Position().y-79, 20, 20);


        context.beginPath();
        context.rect(player.Position().x+ 290, player.Position().y-85, 30, 30);
        context.fillStyle = "red"
        context.fillRect(player.Position().x+290, player.Position().y-85, 30, 30);
        context.stroke()
   }


    const Draw = (context : any) => {
        // canvasRef.current.style.background =  gameLevels[gameState].Rooms()[roomState].BackDrop() 
        //dayNight
//        canvasRef.current.style.background = "url('"+ gameLevels[gameState].Rooms()[roomState].BackDrop() + "')"
        canvasRef.current.style.background = "url('"+ dayNight.DayNightImg() + "')"

        renderLayout(context);
        RenderPlacedItems(context )

        GameObjects(context)

        RenderList(context);
        RenderExits(context)

        context.beginPath()
        context.save();
       // context.rect(player.Position().x, player.Position().y, player.Dimensions().width, player.Dimensions().height)
      // context.transform(1, .5, .5, 0, 0, 0);
        context.fillText((player.Position().x +  " " + player.Position().y), player.Position().x, player.Position().y-10)
        context.stroke()
        context.drawImage(player.ImageState(), 
        player.GhoustIconProptery().Animate()[player.GhoustIconProptery().AnimationIndex()].sx, 
        player.GhoustIconProptery().Animate()[player.GhoustIconProptery().AnimationIndex()].sy, 
        player.GhoustIconProptery().Animate()[player.GhoustIconProptery().AnimationIndex()].px, 
        player.GhoustIconProptery().Animate()[player.GhoustIconProptery().AnimationIndex()].py, 
        player.Position().x, player.Position().y, player.Dimensions().width, player.Dimensions().height)
        context.restore()

        
        context.stroke()
        player.GhoustIconProptery().AnimateStart(player.IsAlive())
       // CollectFood();
        //renderEnemy();
       // EnmeyAttack()
        //RenderVillager();
        //RenderMovingBlock();
       // Attack()
       Attack(context)
        PlaceObject(context)
       // rednerDoorway();
        //NightModeRender(context)
        RenderHealthBarPlayer(context)
        DisplayOptions(context)

        Shooting(context)
        ViewInventory(context)

    }
    

    const GameLoop = () => {
        const context = canvasRef.current.getContext('2d');

        ClearContext(context);
        context.save();
       context.translate(-player.Position().x+100, -player.Position().y+100 );

        Draw(context);

       context.restore();
       context.setTransform(2.7,0,0,2.7,0,0)

        setTimeout(function() {
            if(player.IsAlive()){
                requestAnimationFrame(GameLoop)
                
            }
            else{
                context.fillText("Dead", player.Position().x, player.Position().y - 20);
            }
        }, 1000 / 30);
    }

    window.onload = () => {
    requestAnimationFrame(GameLoop)
}


    return(
        <div className={"center"}>
            <canvas onClick={e => {

            }} ref={canvasRef}></canvas>

        </div>
    )
    }

export default Main;