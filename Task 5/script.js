"use strict";
function rockPaperScissors(player1, player2) {
    function isMove(move) {
        return ['rock', 'paper', 'scissors'].includes(move);
    }
    if (!isMove(player1) || !isMove(player2)) {
        return "Invalid input. Please use 'rock', 'paper', or 'scissors'.";
    }
    if (player1 === player2) {
        return "Draw!";
    }
    const winConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };
    if (winConditions[player1] === player2) {
        return "Player 1 won!";
    }
    else {
        return "Player 2 won!";
    }
}
console.log(rockPaperScissors("scissors", "paper"));
console.log(rockPaperScissors("scissors", "rock"));
console.log(rockPaperScissors("paper", "paper"));
console.log(rockPaperScissors("jonas", "petras"));
