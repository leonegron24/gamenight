import { AppState } from "../AppState.js"
import { Player } from "../models/Player.js"

class PlayersService{
    scorePoint(playerName){
        console.log('service score', playerName)
        const playerToScore = AppState.players.find(player => player.name == playerName)
        console.log(playerToScore)
        if (!playerToScore){
            return
        }
        playerToScore.score += 1
}
    addImage(playerName){
        console.log('service image', playerName)
        const playerToAddImage = AppState.players.find(player => player.name ==playerName)
        console.log(playerToAddImage)
        if (!playerToAddImage){
            return
        }
        playerToAddImage.showImage = !playerToAddImage.showImage
    }
}
export const playersService = new PlayersService()