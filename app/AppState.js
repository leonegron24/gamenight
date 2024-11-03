import { Player } from './models/Player.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  
  players = [
    new Player("Jake"), 
    new Player("Leo"), 
    new Player("Mick"),
    new Player("Bert"),
    new Player("King"),
    new Player("Queen"),
    new Player("Jack")
  ]
  











    /**@type {import('./models/Example.js').Example[]} */
    examples = [] 
}


export const AppState = createObservableProxy(new ObservableAppState())