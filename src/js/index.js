
import {Game} from './Game.js';


let game;

let btnStart = document.getElementById("start");
let btnHit = document.getElementById("hit");
let btnStand = document.getElementById("stand");
let dealerScore = document.querySelector("#dealer .score");
let playerScore = document.querySelector("#player .score");

btnStart.addEventListener("click", function(e) {
    game = new Game();
    game.start();
    console.log(game);


    playerScore.innerHTML = writeScore(game.player.name, game.player.score);
    dealerScore.innerHTML = writeScore(game.dealer.name, game.dealer.score);

    
    
    

})

btnHit.addEventListener("click", function(e) {
    game.playerHit();
    playerScore.innerHTML = writeScore(game.player.name, game.player.score);
    
})

function writeScore(name, score) {
    return name + " score: " + score; 
}

