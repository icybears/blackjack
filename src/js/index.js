
import {Game} from './Game.js';


let game;

let btnStart = document.getElementById("start");

btnStart.addEventListener("click", function(e) {
    game = new Game();
    game.start();
})