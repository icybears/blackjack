import {
    Card
} from './Card.js';

export class Deck {

    constructor() {
        let i = 0;
        this._deck = [];

        for (let suit of Card.suits) {

            for (let val of Card.values) {

                this._deck.push({ 
                                id : i , 
                                card: new Card(val, suit)
                            });
                            i++;
            }
        }

    }

    drawCard () {
        let card = this.getRandomCard();

        this.removeCard(card);

        return card;

    }
    getCardById(id) {
        return (
        this._deck.find(function(deckElem) {
            return deckElem.id == id;
        })
    );
    }
    removeCard (card) {
        let index = this._deck.indexOf(card);

        this._deck.splice(index, 1);
    }

    getRandomCard () {
        let id = this.rand(this._deck.length);
        let card;
        do{
           card = this.getCardById(id);
        } while(card);

        return card;
    }

    rand (max) {
        // between 0 and max, max not included
        return Math.trunc(Math.random() * max);
    }

}