import {Card} from './Card.js';
import {Player} from './Player.js';


export class Game {

    constructor () {
        this._deck = [];
    }

    Start () {
        loadCard();
    }

    loadCards () {
        for (let suit of Card.suits) {
            for (let val of Card.values) {
                this._deck.push(new Card(val, suit));
            }
        }
    }

}