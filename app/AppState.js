import { Player } from './models/Player.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  
  players = [
    new Player("Jake","https://em-content.zobj.net/source/apple/391/man-teacher_1f468-200d-1f3eb.png"), 
    new Player("Leo", "https://em-content.zobj.net/source/google/412/man-teacher_1f468-200d-1f3eb.png"), 
    new Player("Mick", "https://em-content.zobj.net/source/samsung/405/man-teacher_1f468-200d-1f3eb.png"),
    new Player("Bert", "https://em-content.zobj.net/source/microsoft-3D-fluent/406/man-teacher_1f468-200d-1f3eb.png"),
    new Player("King", "https://em-content.zobj.net/source/google/412/person-with-crown_1fac5.png"),
    new Player("Queen", "https://em-content.zobj.net/source/whatsapp/401/person-with-crown_1fac5.png"),
    new Player("Jack", "https://em-content.zobj.net/source/twitter/408/person-with-crown_1fac5.png")
  ]
  











    /**@type {import('./models/Example.js').Example[]} */
    examples = [] 
}


export const AppState = createObservableProxy(new ObservableAppState())