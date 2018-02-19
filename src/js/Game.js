import {
    Deck
} from './Deck.js';
import {
    Player
} from './Player.js';


export class Game {

    constructor() {
        this._options = {
            "type": "single-deck"
        }
        this._turn = null;
        

    }

    start() {
        this.deck = new Deck();
        this.player = new Player();
        this.dealer = new Player("dealer");

        this.distributeCards();

        this._turn = this.player;
    }

    distributeCards() {

        this.player.giveCard(this.deck.drawCard());
        this.player.giveCard(this.deck.drawCard());
        this.dealer.giveCard(this.deck.drawCard());
        this.dealer.giveCard(this.deck.drawCard());

    }

    playerHit () {
        this.player.giveCard(this.deck.drawCard());

        this._turn = this.dealer;
    }

    playerStand () {
        this.player.stand();
    }

    dealerHit () {
        this.dealer.giveCard(this.deck.drawCard());
    }


}