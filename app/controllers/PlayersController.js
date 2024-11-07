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
        players.sort((a,b) => b.score - a.score).forEach((player) => playerContent += player.PlayerTemplateCard)
        playerElm.innerHTML = playerContent
        // To add sorting player functionality, guess is here:
        // players.forEach((player) => player.sort((a,b) a.score - b.score)); 
        // I pulled that from chatGPT, not fully understanding how that works though.          ******
      }

      scorePoint(playerName){
        console.log('clicked',playerName)
        playersService.scorePoint(playerName)
        this.drawPlayers()
      }

      addImage(playerName){
        console.log('addImage', playerName)
        playersService.addImage(playerName)
        this.drawPlayers()
      }









}
