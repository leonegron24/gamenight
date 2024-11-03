import { AppState } from "../AppState.js"

class PlayersService{
    scorePoint(playerName){
        console.log('service score', playerName)
        const playerToScore = AppState.players.find(player => player.name == playerName)
        console.log(playerToScore)
        playerToScore.score += 1
}
}
export const playersService = new PlayersService()