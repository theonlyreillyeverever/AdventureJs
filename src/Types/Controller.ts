import {MoveState} from "./MoveState"
import { OBJECTSTATE } from "./Objects";
import {Player} from "./Player"

export enum ControllerState {
        MOVEMENT,
        INVENTORY, 
        PLACEITEM,
        SELECTION,
}


export class Controller{
        protected moveState : MoveState | null;
        protected keyMap = {68 : 'right', 65 : 'left', 87 : 'up', 83 : 'down'}
        protected PlayerController : Player;
        private playerAttack = require("../audio/ply-attack.mp3")
        private hitSound = new Audio(this.playerAttack.default)
        private continuekey : boolean;
        private controllerState : ControllerState


        constructor(startState : MoveState, ply : Player){
                this.moveState = startState
                this.PlayerController = ply
                window.onkeydown = (e : any) =>  this.KeyDown(e);
                window.onkeyup = (e : any) =>  this.KeyUp(e);
                this.continuekey = false
                this.controllerState = ControllerState.MOVEMENT
        }


        StateSwith(state : ControllerState){
            this.controllerState = state
        }


        KeyDown(e : any) : void{
              const movement = 10;
              const key = e.keyCode;


            switch(this.controllerState){
                case ControllerState.MOVEMENT : {


                    // Movement Keys 
                    /**
                     * 87 to 65 are the the A,S,D W key codes 
                     */
                    if(key === 87){
                        this.PlayerController.SetPosition({x : this.PlayerController.Position().x , y : this.PlayerController.Position().y - movement })
                    }
                    if(key === 68){
                    this.PlayerController.SetPosition({x : this.PlayerController.Position().x+movement , y : this.PlayerController.Position().y  })
                    this.PlayerController.GhoustIconProptery().SetDirectionState(true)
                    }
                    if(key === 83){
                        this.PlayerController.SetPosition({x : this.PlayerController.Position().x , y : this.PlayerController.Position().y + movement})
                    }
                    if(key === 65){
                        this.PlayerController.SetPosition({x : this.PlayerController.Position().x -movement , y : this.PlayerController.Position().y})
                        this.PlayerController.GhoustIconProptery().SetDirectionState(false)
                    }
    



                    if(this.PlayerController.InRange()){
                        if(key === 32){
                            //console.log(this.PlayerController.CanCross())
                            console.log(this.PlayerController.DoAction())
                            if(this.PlayerController.DoAction()?.DoAction())
                            {
                                this.PlayerController.DoAction()?.SetDoAction(false)
                                return;
        
                            }
                            this.PlayerController.DoAction()?.SetDoAction(true)
                        }
        
                        if(this.PlayerController.DoAction()?.DoAction()){
                            
                        }
                    }
                  //  console.log(this.PlayerController.InRange())


                    //eNTER KEY
                    if(key === 32){
                        this.PlayerController.SetPlayerAttack(true)
                        this.hitSound.play()
                    }

                    if(key === 13 && this.PlayerController.InRange()){
                        //this.StateSwith(ControllerState.SELECTION)
                    }

                    if(key === 73){
                        if(!this.PlayerController.ViewInventory()){
                            this.PlayerController.SetViewInventory(true)
                            this.StateSwith(ControllerState.INVENTORY)
                            
                            return;
                        }
    
                        this.PlayerController.SetViewInventory(false)


                        this.StateSwith(ControllerState.MOVEMENT)

                    }


                    if(this.PlayerController.InRange() && this.PlayerController.CurrentItemInRange().Name() !== ""){
                        if(key === 49){
                  
                            //console.log(this.PlayerController.CanCross())
                            //console.log(this.PlayerController.DoAction())
                            if(this.PlayerController.DoAction()?.DoAction())
                            {
                                this.PlayerController.DoAction()?.SetDoAction(false)
                                return;
        
                            }
                            this.PlayerController.DoAction()?.SetDoAction(true)
                        }
        
                        if(this.PlayerController.DoAction()?.DoAction()){
        
                                              }
                        if(key === 50){
                        }

                    }

                    break;
                }

                case ControllerState.INVENTORY : {

                    if(key === 32){
                        this.PlayerController.PlaceObject().SetPlaceObject(true)
                        this.PlayerController.SetViewInventory(false)
    
                    }
    
                    if(key === 68){
                        this.PlayerController.Inventory().SetSelectItemindex(this.PlayerController.Inventory().SelectedItemIndex()-1)
                    }
                    if(key === 65){
                        this.PlayerController.Inventory().SetSelectItemindex(this.PlayerController.Inventory().SelectedItemIndex()+1)
                    }
                    if(key === 13){
                        if(this.PlayerController.Inventory().GetInventory().length > 0){
                            this.PlayerController.PlaceObject().SetPlaceObject(true)
                            this.PlayerController.PlaceObject().SetSelectedItem(this.PlayerController.Inventory().GetInventory()[this.PlayerController.Inventory().SelectedItemIndex()])
                            this.PlayerController.SetViewInventory(false)
    
                            this.continuekey = true
                        }
    
                    }
                    if(this.PlayerController.PlaceObject().PlaceObject()){
                        this.PlayerController.PlaceObject().SelectArea(key, this.PlayerController)
        
                        if(key === 32){
                           // this.PlayerController.Inventory().GetInventory()[this.PlayerController.Inventory().SelectedItemIndex()].Use(this.PlayerController)
                            this.PlayerController.Inventory().DropItemByIndex(this.PlayerController.Inventory().SelectedItemIndex())
                            this.PlayerController.Inventory().SetSelectItemindex(this.PlayerController.Inventory().SelectedItemIndex()-1)
                            this.PlayerController.PlaceObject().Item().UpdateState(OBJECTSTATE.READY)
                            this.PlayerController.PlaceObject().SetPlaceObject(false)
                            this.StateSwith(ControllerState.MOVEMENT)

    
                        }               
                    }
    
                    if(key === 77){
    
                    }
    
                    if(key === 73){

                        if(!this.PlayerController.ViewInventory()){
                            this.PlayerController.SetViewInventory(true)
                            this.StateSwith(ControllerState.INVENTORY)
                            
                            return;
                        }
    
                        //this.PlayerController.SetViewInventory(false)
                        this.StateSwith(ControllerState.MOVEMENT)

                    }

                    break;
                }


                case ControllerState.PLACEITEM :{
                    

                    break;
                }
                
                case ControllerState.SELECTION :{

                    break;
                 }

            }








            // if(this.PlayerController.Speak()){
            //     if(key === 13){
            //         switch (this.PlayerController.ViewMessage()) {
            //             case true:
            //                 this.PlayerController.SetViewMessage(false)
            //                 break;
            //             case false:
            //                 this.PlayerController.SetViewMessage(true)
            //                 break
            //         }
            //     }
            // }


            //   if(!this.PlayerController.ViewInventory() && !this.PlayerController.ViewMessage()){


            //     if(key === 67){
            //         this.PlayerController.SetShooting(true)
            //         this.PlayerController.AddBullet();
            //     }

            //     if(key === 49){

            //     }

            //     if(key === 50){

            //     }

            // }
            // if(this.PlayerController.ViewInventory()){

            //     }

            //     if(this.PlayerController.PlaceObject().PlaceObject()){
            //         this.PlayerController.PlaceObject().SelectArea(key, this.PlayerController)
    
            //         if(key === 32){
            //             //this.PlayerController.Inventory().GetInventory()[this.PlayerController.Inventory().SelectedItemIndex()].Use(this.PlayerController)
            //             this.PlayerController.Inventory().DropItemByIndex(this.PlayerController.Inventory().SelectedItemIndex())
            //             this.PlayerController.Inventory().SetSelectItemindex(this.PlayerController.Inventory().SelectedItemIndex()-1)
            //             this.PlayerController.PlaceObject().Item().UpdateState(OBJECTSTATE.READY)
            //             this.PlayerController.PlaceObject().SetPlaceObject(false)
            //             this.StateSwith(ControllerState.MOVEMENT)

            //         }               
            //     }

            //     if(key === 77){

            //     }

        //         if(key === 73){
        //             if(!this.PlayerController.ViewInventory()){
        //                 this.PlayerController.SetViewInventory(true)
                        
        //                 return;
        //             }

        //             this.PlayerController.SetViewInventory(false)
        //         }
        //         //console.log(this.PlayerController.Position())
        // }
        }
    

        KeyUp(e : any){
            //console.log(e.keyCode)    
            this.PlayerController.SetPlayerAttack(false)
            this.PlayerController.SetShooting(false)
            //this.PlayerController.PushBuillet().SetPosition({x : this.PlayerController.Position().x, y :this.PlayerController.Position().y})


        }
}