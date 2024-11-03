import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayersService.js";


export class PlayersController{
    constructor(){
        console.log(AppState.players)
        this.drawPlayers()
    }

    drawPlayers(){
        const playerElm = document.getElementById('players-container')
        const players = AppState.players
        let playerContent = ''
        players.forEach((player) => playerContent += player.PlayerTemplateCard)
        playerElm.innerHTML = playerContent
      }

      scorePoint(playerName){
        console.log('clicked',playerName)
        playersService.scorePoint(playerName)
        this.drawPlayers()
      }










}
