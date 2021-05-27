
export class man {
    
}
// import { useEffect, useRef, useState } from "react"
// import {Food} from "./Types/Food"
// import ApplePng from "./Assets/Apple.png"
// import Pup from "./Assets/ghost.png"

// import { Player } from "./Types/Player"
// import { Controller } from "./Types/Controller"
// import { Enemy } from "./Types/Enemy"
// import {Level} from "./Levels/Level"
// import {Doorway} from "./Levels/Doorway"
// import {BuildLevel} from "./Levels/BuildLevels"
// import Wall from "./Assets/wall.png"
//  import Demon from "./Assets/demon.gif"
// import DemonDog from "./Assets/dog-demon.png"
// import SwordDrawing from "./Assets/sword.png"
// import { Villager } from "./Types/Villager"
// import {MoveableBlock} from "./Levels/MoveableBlock"
// import {House} from "./Types/House"
// import {openDoor, closedDoor} from "./Assets/Door"
// import {Key} from "./Types/Key"
// import { GameObjetsAbstract } from "./Levels/WallObejctsAbstract"
// import { Weapon } from "./Types/Weapon"
// import {Sword} from "./Types/Weapons/Sword"
// import {Water} from "./Levels/Water"
// import NightMode from "./Assets/nightmode.png"
// import {Clock} from "./Game/Clock"
// import {Animal} from "./Types/Entity"
// import { Bullet } from "./Types/Bullet"
// import { DayNight } from "./Game/DayNight"
// import { GameObjects } from "./Types/Objects"
// import {Observer} from "./Game/TriggedEvent"
// const Main = () => {

//     const au = require("./audio/game.mp3")
//     const audio = new Audio(au.default);
//     //audio.play()

//     const canvasRef = useRef<any>(null);
//     const LevelsList = new BuildLevel()
//     const [player, setPlayer] = useState<Player>(new Player("Player", 100, {x : 100, y : 100}, {width : 50, height : 50}))
//     const MOVETEST : MoveableBlock = new MoveableBlock(810, 360, false);
//     const MOVETESTLIST : MoveableBlock[] = [
//         //MOVETEST,new MoveableBlock(810, 400, false),new MoveableBlock(600, 300, false)
//     ]
//     const WeaponLIST : Weapon[] = [new Sword({x : 280, y :200})]
//     const sheeps : Animal[] = [
//     ]
//     const dayNight = new DayNight();
//     const ObserverClass = new Observer<GameObjetsAbstract>()

//     const obj = {
//         position : {x : 210, y : 690},
//         di : {width : 360, height: 200}
//     }
//     //new Key("key", "door key", {x : 1200, y : 160}, false, 0)]
//     const Timmer : Clock = new Clock();

//     const gameLevels : Level[] = [
//         LevelsList.BuildLevelTwo()
//     ]
    
//     let gameState : number = 0
//     let roomState : number = 0;
//     const gameObjects = gameLevels[gameState].Rooms()[roomState].Layout().BuildObjects()

//    //console.log(gameLevels[gameState].Rooms()[roomState].Layout().BuildWalls())
//     useEffect(() => {
//         const canvas = canvasRef?.current;
//         canvas.width = 1300 ;
//         canvas.height = 700;
//         canvas.style.width = 1300
//         canvas.style.height = 700

//        // canvas.style.background = gameLevels[gameState].Background()

//     }, [])


//     useEffect(() => {
//         let mounted = false;
//         if(!mounted){
//         const PlyController = new Controller(0, player);

//         }
//         return () => {
//             mounted = true;
//         }

//     }, [player])

    
// //{x: 650, y: 1970}

//     const ClearContext = () => {
//         const context = canvasRef.current.getContext('2d');
//         context.clearRect(0,0,  canvasRef.current.width, canvasRef.current.height)
//     }



//    const RenderList = () =>{
//         const context = canvasRef.current.getContext('2d');
//         // gameLevels[gameState].Rooms()[roomState].FoodList().forEach((f : Food, index : number) => {
//         //     const Apple = new Image()
//         //     Apple.src = f.Img()
//         //     context.drawImage(Apple, f.Position().x, f.Position().y, 30, 30)
//         // });

//         // KeyList.forEach((f : Key, index : number) => {
//         //     if(!f.Collected()){
//         //         const key = new Image()
//         //         key.src = f.Img()
//         //         context.drawImage(key, f.Position().x, f.Position().y, 30, 30)
//         //         player.CollectItem(f)
//         //     }
            
//         // });

//         WeaponLIST.forEach(( w : Weapon, index : number)=> {
//             if(!w.Collected()){
//                 context.drawImage(w.Img(), w.Position().x, w.Position().y, 30, 30)
//                 player.CollectWeapon(w)
//             }
//         })
//         // context.beginPath();
//         // context.fillRect(obj.position.x, obj.position.y, obj.di.width, obj.di.height)
//         // context.stroke()



//         sheeps.forEach((s : Animal, index : number) => {
            
//             context.beginPath();
//            // context.rect(s.Position().x, s.Position().y, s.Dimensions().width, s.Dimensions().height)
//             //context.fillStyle = "white"
//             context.save()
//             context.globalAlpha = 0.2;
//             context.fillStyle = "red";
//             context.arc(s.Position().x+30, s.Position().y+20, 100, 0, 2 * Math.PI)
//        //     context.fillRect(s.Position().x-50, s.Position().y-50, s.Dimensions().width+100, s.Dimensions().height+100)
//             context.stroke()
//             context.restore();
//             context.drawImage(s.Cow().Img(), 
//             s.Cow().Animate()[s.Cow().AnimationIndex()].sx,
//             s.Cow().Animate()[s.Cow().AnimationIndex()].sy,
//             s.Cow().Animate()[s.Cow().AnimationIndex()].px,
//             s.Cow().Animate()[s.Cow().AnimationIndex()].py,
//             s.Position().x, s.Position().y, s.Dimensions().width, s.Dimensions().height)


//             if(s.Position().x >= obj.position.x-100 && s.Position().x <= obj.position.x && 
//             s.Position().y >= obj.position.y-100 && s.Position().y <= obj.position.y
//         ){
//             s.SetHome()
//         }
//         if(s.Position().x >= obj.position.x && s.Position().x <= obj.position.x+100 &&
//         s.Position().y >= obj.position.y && s.Position().y <= obj.position.y+100
//         ){
//             s.SetHome()

//         }
//             if(!s.IsHome()){
//                 gameLevels[gameState].Rooms()[roomState].Layout().BuildWalls().forEach((w : GameObjetsAbstract[], index : number) => {
//                     w.forEach((single : GameObjetsAbstract, subIndex : number) => { single.DetectCollition(s)})

//             })
//             s.Follow(player)
//             }
// //            s.Cow().AnimateStart(true);
            

//         })
        
//    }

//    const CollectFood = () => {
//     gameLevels[gameState].Rooms()[roomState].FoodList().forEach((f : Food, index : number) => {
//         if(player.Position().x === f.Position().x && player.Position().y === f.Position().y){
//             player.Inventory().AddItem(f);
//             const tmp : Food[] = [];
//             gameLevels[gameState].Rooms()[0].FoodList().forEach((innerF : Food, i : number) => {
//                 if(innerF === f){
//                     console.log(innerF === f)
//                 }
//                 else{
//                     tmp.push(innerF);
                    
//                         //DisplayMessage(innerF.Name())
//                 }
//             })
//             gameLevels[gameState].Rooms()[roomState].setFood(tmp);
//         }
//     });
//    }


//    const RenderMovingBlock = () => {
//     const context = canvasRef.current.getContext('2d');

//        MOVETESTLIST.forEach(((m : MoveableBlock, index : number) => {
//         const rock = new Image();
//         rock.src = DemonDog
//         context.drawImage(rock,m.Position().x, m.Position().y, 50, 50)
//         //context.fillRect(m.Position().x, m.Position().y, 50, 50)
//         //context.stroke();
//         m.MoveBlock(player)

//        }))

//    }






//    const rednerDoorway = () => {
//     const context = canvasRef.current.getContext('2d');
//     gameLevels[gameState].Rooms()[roomState].Doorways().forEach((d : Doorway, index : number) => {
//         try{
//         if(player.Inventory().HasKey() && gameLevels[gameState].Rooms()[roomState].Doorways()[d.DoorId()].KeyRequired()){
//             gameLevels[gameState].Rooms()[roomState].Doorways()[d.DoorId()].UnlockDoor()
//             player.Inventory().SetKey(undefined)
//         }


//         // Moves you to the next room
//          if((player.Position().x >= d.Position().x) && (player.Position().x <= d.Position().x+20) && player.Position().y === d.Position().y  && !gameLevels[gameState].Rooms()[roomState].Doorways()[d.DoorId()]?.KeyRequired()){

//             gameLevels[gameState].Rooms()[roomState].Doorways().forEach(e => {if(d.DoorId() === e.DoorId()) {
//                 console.log(e.Pathway())
//                 roomState = e.Pathway()}})
//         }

//         else if(gameLevels[gameState].Rooms()[roomState].Doorways()[d.DoorId()]?.KeyRequired()){
//             context.fillText(d.Description(), d.Position().x, d.Position().y - 30)
//         }
//     }
//     catch(e){
//         console.log(e)
//     }

  
//         const door = new Image()
//         door.src = (d.KeyRequired() ? closedDoor : openDoor)
//         context.drawImage(door,d.Position().x, d.Position().y, 50, 50)
//     });
//    }


//    const renderLayout = () => {
//     const context = canvasRef.current.getContext('2d');
//     const height = 50
//     const width = 50
//     const layout = gameLevels[gameState].Rooms()[roomState].Layout().BuildWalls()
//     layout.forEach((w : GameObjetsAbstract[], index : number) => {
//         w.forEach((single : GameObjetsAbstract, subIndex : number) => {
//             if(single.Value() === 4){
// //                ObserverClass.Observe(w[subIndex])
//             }
//             if(single.Value() === 5 ){
//                 context.drawImage(single.Animal().Cow().Img(), 
//                 single.Animal().Cow().Animate()[single.Animal().Cow().AnimationIndex()].sx,
//                 single.Animal().Cow().Animate()[single.Animal().Cow().AnimationIndex()].sy,
//                 single.Animal().Cow().Animate()[single.Animal().Cow().AnimationIndex()].px,
//                 single.Animal().Cow().Animate()[single.Animal().Cow().AnimationIndex()].py,
//                 single.Animal().Position().x, single.Animal().Position().y, single.Animal().Dimensions().width, single.Animal().Dimensions().height)
//                         single.Animal().Follow(player)
                
//                 single.DetectCollitionArray(layout, single.Animal())
//                 context.fillStyle = "red"
//                 context.fillText((single.Animal().Position().x + " "  + single.Animal().Position().y), single.Animal().Position().x, single.Animal().Position().y)

//         }

//         else if(single.Value() === 2){
//             if(!player.CanCross()){
//                     single.DetectCollition(player)  
//             }
        
//             context.drawImage(single.Img(),
//             single.WaterAnimated()?.Animate()[single.WaterAnimated()?.AnimationIndex()].sx,
//             single.WaterAnimated()?.Animate()[single.WaterAnimated()?.AnimationIndex()].sy,
//             single.WaterAnimated()?.Animate()[single.WaterAnimated()?.AnimationIndex()].px,
//             single.WaterAnimated()?.Animate()[single.WaterAnimated()?.AnimationIndex()].py
            
//             ,single.Position().x, single.Position().y, width, height)
//             single.Animate();
//         }
//         else{
//             single.MoveBlock(player)
//             single.DetectCollition(player)  
//             //single.Animate();
//             context.drawImage(single.Img(),single.Position().x, single.Position().y, width, height)
            
//                 }
//         })    
//     });

//     gameLevels[gameState].Rooms()[roomState].GameObjects().forEach((h : GameObjects, index : number) => {
//        const playerObjectRange = h.Area().WithinRange(player, h);
//         if(playerObjectRange){
//                 player.IsInRange(playerObjectRange)
//                 player.SetDoAction(h)
//                // ObserverClass.Trigger().SetTrigger(h.DoAction())
//         }
//         h.RR();
//             //player.setCanCross(true)
//             h.Process(player)
        
//         DisplayMessage(h.Description(), h.WithinRange())
//         context.drawImage(h.Img(), h.Position().x, h.Position().y, h.Dimensions().width, h.Dimensions().height)
//         context.fillText((h.Position().x + "   "+  h.Position().y), h.Position().x, h.Position().y+50)
//     })
//    }

//    const GameObjects = () => {
//     const context = canvasRef.current.getContext('2d');
//     gameObjects.forEach((e : GameObjects[], index : number) => {
//             e.forEach((o : GameObjects, subIndex : number) => {
                
//                 if(o.Area().WithinRange(player, o)){
//                     player.IsInRange(o.Area().WithinRange(player, o))

//                     player.SetDoAction(o)
//                     o.Process(player)
//                     DisplayMessage(o.DoAction().valueOf().toString(), o.WithinRange())

//                 }
//                 context.drawImage(o.Img(), o.Position().x, o.Position().y, o.Dimensions().width, o.Dimensions().height)
            

//             })
            
            
//     }) 
        
//    }


//    const DisplayMessage = (pain : string, m : boolean) => {
//     const context = canvasRef.current.getContext('2d');
//     if(m){
//         context.beginPath()
//         context.fillStyle = "white"
//         context.fillRect(player.Position().x, player.Position().y - 30, 80, 25)
//         context.stroke();
//         context.fillStyle = "black"
//         context.fillText(pain, player.Position().x, player.Position().y - 20);
//     }

//    }

//    const ViewInventory = () => 
//    {
//     const context = canvasRef.current.getContext('2d');
//     if(player.ViewInventory()){
                   
//         context.beginPath();
//         context.rect(player.Position().x +9, player.Position().y - 90, 250, 230)
//         context.fillStyle = "white"
//         context.fillRect(player.Position().x + 9, player.Position().y - 90, 250, 230)
//         context.stroke()
//         context.fillStyle = "black";
//         context.fillText("Items", player.Position().x + 15, player.Position().y - 70)

//         for(let i = 1; i<=player.Inventory().GetInventoryMaxSize(); i++){
//             context.beginPath();
//             context.rect(player.Position().x-10 + (i*45), player.Position().y - 60, 20, 20)
//             context.fillStyle = (player.Inventory().SelectedItemIndex() === i ? "blue" : "red")
//             context.fillRect(player.Position().x-10 + (i*45), player.Position().y - 60, 20, 20)
//             context.stroke()
//             context.fillStyle = "black";
//             ///context.fillText(player.Inventory().GetInventory()[i]?.name, player.Position().x + (i*50), player.Position().y + 25)
//         }

//         context.fillText("Skills", player.Position().x + 15, player.Position().y - 10)


//         context.fillText("Time", player.Position().x + 15, player.Position().y + 30)

//         context.fillStyle = "black";
//         console.log(Timmer.GetTime());
//         context.fillText(Timmer.GetTime(), player.Position().x + 50, player.Position().y + 50)

//     }

//    }

//    const ViewSpeach = (message : string) => 
//    {
//        const lineHight : number = 10;
       
//        const textBreak : string[] = message.split('\n');
//     const context = canvasRef.current.getContext('2d');
//     if(player.Speak()){
                   
//         context.beginPath();
//         context.rect(player.Position().x - 5, player.Position().y + 10, 200, 100)
//         context.fillStyle = "white"
//         context.fillRect(player.Position().x - 5, player.Position().y + 10, 200, 100)
//         context.stroke()
//             context.fillStyle = "black";
//             for(let i =0 ; i < textBreak.length; i++){
//                 context.fillText(textBreak[i], player.Position().x , (player.Position().y+ 30) + (i*lineHight))
//             }

//     }
//    }

//    const NightModeRender =() =>{
//     const context = canvasRef.current.getContext('2d');

//        const nightmode = new Image();
//        nightmode.src = NightMode
//         context.drawImage(nightmode, player.Position().x- 130, player.Position().y - 140, 600, 300)

//    }

//    const Shooting = () => {
//     const context = canvasRef.current.getContext('2d');
//     const a = player.PushBuillet()
//         a.forEach((b : Bullet, index : number) => {
//             player.Shoot(b)
//             context.fillStyle = "red"

//             context.beginPath();
//             context.arc(b.Position().x, b.Position().y , 5, 0 ,2 * Math.PI,true);
//             context.fill()
//             context.stroke()
//         })
  
       
//    }

   

//    const RenderHealthBarPlayer = () => {
//     const context = canvasRef.current.getContext('2d');

//     context.beginPath();
//     context.rect(player.Position().x - 80, player.Position().y - 80, 100, 20);
//     context.fillStyle = "red"
//     context.fillRect(player.Position().x - 80, player.Position().y - 80, 100, 20);
//     context.stroke()

//     context.beginPath();
//     context.rect(player.Position().x - 80, player.Position().y - 80, player.Health(), 20);
//     context.fillStyle = "green"
//     context.fillRect(player.Position().x - 80, player.Position().y - 80, player.Health(), 20);
//     context.stroke()

//     context.beginPath();
//     context.rect(player.Position().x - 80, player.Position().y - 60, 100, 5);
//     context.fillStyle = "blue"
//     context.fillRect(player.Position().x - 80, player.Position().y -60, player.XP().CalculatePercentage(), 5);
//     context.stroke()

//    }

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
   
   
//    const PlaceObject = () => {
//     const context = canvasRef.current.getContext('2d');

//        if(player.PlaceObject().PlaceObject()){
//             context.beginPath()
//             context.fillStyle = "red"
//             context.rect(player.PlaceObject().Pos().x, player.PlaceObject().Pos().y, player.Dimensions().width, player.Dimensions().height)
//             context.stroke();
//         }
//    }

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

//    const DisplayEnemyHealthBar = (context : any, e : Enemy) => {
//     context.save();
//     context.beginPath();
//     context.rect(e.Position().x - 20, e.Position().y - 20, 100, 5);
//     context.fillStyle = "red"
//     context.fillRect(e.Position().x - 20, e.Position().y - 20, 100, 5);

//     context.stroke()
//     context.beginPath();
//     context.rect(e.Position().x - 20, e.Position().y - 20, e.Health(), 5);
//     context.fillStyle = "green"
//     context.fillRect(e.Position().x - 20, e.Position().y - 20, e.Health(), 5);

//     context.stroke()
//     context.restore() 
//    }



//    const DisplayOptions = () => {
//         const context = canvasRef.current.getContext('2d');
//         context.beginPath();
//         context.rect(player.Position().x+ 330, player.Position().y-85, 30, 30);
//         context.fillStyle = "red"
//         context.fillRect(player.Position().x+330, player.Position().y-85, 30, 30);
//         context.stroke()


//         context.drawImage(player.CurrentWeapon().Img(), player.Position().x+335, player.Position().y-79, 20, 20);


//         context.beginPath();
//         context.rect(player.Position().x+ 290, player.Position().y-85, 30, 30);
//         context.fillStyle = "red"
//         context.fillRect(player.Position().x+290, player.Position().y-85, 30, 30);
//         context.stroke()
//    }


//     const Draw = () => {
//         // canvasRef.current.style.background =  gameLevels[gameState].Rooms()[roomState].BackDrop() 
//         //dayNight
// //        canvasRef.current.style.background = "url('"+ gameLevels[gameState].Rooms()[roomState].BackDrop() + "')"
//         canvasRef.current.style.background = "url('"+ dayNight.DayNightImg() + "')"

//         const context = canvasRef.current.getContext('2d');
//         renderLayout();
//        // RenderList();

//         context.beginPath()
//         context.save();
//        // context.rect(player.Position().x, player.Position().y, player.Dimensions().width, player.Dimensions().height)
//         context.restore()
//         context.stroke()
//         context.drawImage(player.ImageState(), 
//         player.GhoustIconProptery().Animate()[player.GhoustIconProptery().AnimationIndex()].sx, 
//         player.GhoustIconProptery().Animate()[player.GhoustIconProptery().AnimationIndex()].sy, 
//         player.GhoustIconProptery().Animate()[player.GhoustIconProptery().AnimationIndex()].px, 
//         player.GhoustIconProptery().Animate()[player.GhoustIconProptery().AnimationIndex()].py, 
//         player.Position().x, player.Position().y, player.Dimensions().width, player.Dimensions().height)
        
//         context.stroke()
//         player.GhoustIconProptery().AnimateStart(player.IsAlive())
//         CollectFood();
//         //renderEnemy();
//         EnmeyAttack()
//         //RenderVillager();
//         //RenderMovingBlock();
//         Attack()
//         PlaceObject()
//         rednerDoorway();
//        //x drawLing()
//         //NightModeRender()
//         RenderHealthBarPlayer()
//         DisplayOptions()
//         Shooting()
//         ViewInventory()
//         GameObjects()

//     }
    

//     const GameLoop = () => {
//         ClearContext();
//         const context = canvasRef.current.getContext('2d');
//         context.save();
//         context.translate(-player.Position().x+100, -player.Position().y+100 );
//         Draw();

//        context.restore();
//        context.setTransform(2.7,0,0,2.7,0,0)

//         setTimeout(function() {
//             if(player.IsAlive()){
//                 requestAnimationFrame(GameLoop)
                
//             }
//             else{
//                 context.fillText("Dead", player.Position().x, player.Position().y - 20);
//             }
//         }, 1000 / 30);
//     }

//     window.onload = () => {
//     requestAnimationFrame(GameLoop)
// }


//     return(
//         <div className={"center"}>
//             <canvas onClick={e => {

//             }} ref={canvasRef}></canvas>

//         </div>
//     )
//     }

// export default Main;