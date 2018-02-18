import {Deck} from './Deck.js';
import {Player} from './Player.js';


export class Game {

    constructor () {
       
    }

    start () {
        let deck = new Deck();

        console.dir(deck);
        console.log(deck[0]);
    }

  
}


let game = new Game();

game.start();