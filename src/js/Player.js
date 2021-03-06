
export class Player {

    constructor(name = "Player") {
        this._name = name;
        this._score = 0;
        this._cards = [];
        this._playerStanded = false;
    }

    get name() {
        return this._name;
    }

    get cards() {
        return this._cards;
    }
    get score() {
        return this._score;
    }
    get playerStanded () {
        return this._playerStanded;
    }

    giveCard(card) {
        this._cards.push(card);
        this.calculatePlayerScore();
        // console.log(this);
    }

    calculatePlayerScore() {
        let score = 0;
        this._cards.forEach(function(obj) {
            score += obj.card.score;
        }, this)

        this._score = score;
    }


    stand() {
        this._playerStanded = true;
    }
}