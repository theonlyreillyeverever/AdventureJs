import { Player } from "../Types/Player";


export class Game{
     _playerOne : Player
     _canvasRef : any
    constructor(player : Player, canvasRef : any) {
        this._playerOne = player;
        const n = setInterval(() => {
            console.log(this._canvasRef)
            if(canvasRef !== undefined){
                this._canvasRef = canvasRef.getContext('2d');
                if(canvasRef !== undefined){
                    console.log(this._canvasRef)
                   clearInterval(n);
                }
            }
        }, 3000)
    }
    UpdateState(c : any) : void{


    }


    Draw(){

    }


}