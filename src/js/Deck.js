import {
    Card
} from './Card.js';

class Deck {

    constructor() {

        this._deck = [];
        for (let suit of Card.suits) {
            for (let val of Card.values) {
                this._deck.push(new Card(val, suit));
            }
        }
    }

}