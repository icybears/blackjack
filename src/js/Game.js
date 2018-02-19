import {Deck} from './Deck.js';
import {Player} from './Player.js';


export class Game {

    constructor () {
       this._options = {
           "type" : "single-deck"
       }

    }

    start () {
        this.deck = new Deck();
        this.player = new Player();
        this.dealer = new Player("dealer");

        this.distributeCards();
    }

    distributeCards () {
        
        this.player.giveCard(this.deck.drawCard());
        this.player.giveCard(this.deck.drawCard());
        this.dealer.giveCard(this.deck.drawCard());
        this.dealer.giveCard(this.deck.drawCard());
        
        
    }

  
}

