import { AppState } from "../AppState.js"
import { Player } from "../models/Player.js"

class PlayersService{
    scorePoint(playerName){
        console.log('service score', playerName)
        const playerToScore = AppState.players.find(player => player.name == playerName)
        console.log(playerToScore)
        playerToScore.score += 1
}
    // addImage(playerName){
    //     console.log('service image', playerName)
    //     const playerToAddImage = AppState.players.find(player => player.name ==playerName)
    //     console.log(playerToAddImage)
    //     let htmlImage = Player.PlayerTemplateCard.querySelector('img')
    //     if (htmlImage.classList.contains('d-none')){
    //         htmlImage.classList.remove('d-none');
    //     }
    //     }
}
export const playersService = new PlayersService()