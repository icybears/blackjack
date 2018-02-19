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
        this._hasStarted = false;
        

    }

    start() {
        this.deck = new Deck();
        this.player = new Player();
        this.dealer = new Player("dealer");

        this.distributeCards();

        this._turn = this.player;
        this._hasStarted = true;
    }

    get hasStarted () {
        return this._hasStarted;
    }
    get turn() {
        return this._turn;
    }

    distributeCards() {

        this.player.giveCard(this.deck.drawCard());
        this.player.giveCard(this.deck.drawCard());
        this.dealer.giveCard(this.deck.drawCard());
        this.dealer.giveCard(this.deck.drawCard());

    }

    playerHit () {
        if(!this.player.playerStanded && this.turn === this.player){
            this.player.giveCard(this.deck.drawCard());

            this._turn = this.dealer;
        }
    }

    playerStand () {
        if(!this.player.playerStanded && this.turn === this.player){
            this.player.stand();
        }
    }

    dealerHit () {
        if(this.turn === this.dealer){
            this.dealer.giveCard(this.deck.drawCard());
            this._turn = this.player;
        }
    }


}