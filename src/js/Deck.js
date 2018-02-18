import {
    Card
} from './Card.js';

export class Deck {

    constructor() {

        this._deck = [];
        for (let suit of Card.suits) {
            for (let val of Card.values) {
                this._deck.push(new Card(val, suit));
            }
        }

    }

    removeCardFromDeck (card) {
        let index = this._deck.indexOf(card);

        this._deck.splice(index, 1);
    }

    getRandomCard () {
        
        return this.getRandomValue() + " of " + this.getRandomSuit();
    }

    getRandomValue () {

        let randNum = this.rand(12);

        let values = {
            "0" : "one",
            "1" : "two",
            "2" : "three",
            "3" : "four",
            "4" : "five",
            "5" : "six",
            "6" : "seven",
            "7" : "eight",
            "8" : "nine",
            "9" : "ten",
            "10" : "jack",
            "11" : "queen",
            "12" : "king"
        }

        return values[randNum.toString()];

    }

    getRandomSuit () {

        let randNum = this.rand(3);

        let suits = {
            "0" : "spades",
            "1" : "hearts",
            "2" : "diamonds",
            "3" : "clubs"
        }

        return suits[randNum.toString()];
    }

    rand (max) {
        // between 0 and max, both included
        return Math.trunc(Math.random() * max + 1);
    }

}