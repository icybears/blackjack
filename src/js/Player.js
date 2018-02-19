
export class Player {

    constructor(name = "Player") {
        this._name = name;
        this._score = 0;
        this._cards = [];
    }

    get name() {
        return this._name;
    }

    get score() {
        return this._score;
    }

    giveCard(card) {
        this._cards.push(card);
    }
}