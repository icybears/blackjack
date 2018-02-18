export class Card {

    constructor(value, suit) {

        
        this._value = value.toLowerCase();
        this._suit = suit.toLowerCase();
        this.calculateCardScore();

    }

    get name() {
        return this.value + " of " + this.suit;
    }

    get value() {
        return this._value;
    }

    get suit() {
        return this._suit;
    }
    get score() {
        return this._score;
    }

    calculateCardScore() {

        switch (this.value) {
            case "ace":
                this._score = 1;
                break;
            case "two":
                this._score = 2;
                break;
            case "three":
                this._score = 3;
                break;
            case "four":
                this._score = 4;
                break;
            case "five":
                this._score = 5;
                break;
            case "six":
                this._score = 6;
                break;
            case "seven":
                this._score = 7;
                break;
            case "eight":
                this._score = 8;
                break;
            case "nine":
                this._score = 9;
                break;
            case "ten":
                this._score = 10;
                break;
            case "jack":
                this._score = 10;
                break;
            case "queen":
                this._score = 10;
                break;
            case "king":
                this._score = 10;
                break;
            default:
                this._score = null;
                console.log('invalid card value');

        }
    }
}

Card.suits = ['spades', 'hearts', 'clubs', 'diamonds'];
Card.values = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];