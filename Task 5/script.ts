/* ------------------------------ TASK 5 -----------------------------------
Parašykite TS funkciją, kuri atlieka žirklės/popierius/akmuo žaidimo patikrinimą ir grąžina atsakymą.
Funkcija priima du tekstus ir grąžina tekstą.

Pvz.:
  "scissors", "paper" --> "Player 1 won!"
  "scissors", "rock" --> "Player 2 won!"
  "paper", "paper" --> "Draw!"
-------------------------------------------------------------------------- */
function rockPaperScissors(player1: string, player2: string): string {

  type Move = 'rock' | 'paper' | 'scissors';
  
  function isMove(move: string): move is Move {
    return ['rock', 'paper', 'scissors'].includes(move);
  }

  if (!isMove(player1) || !isMove(player2)) {
    return "Invalid input. Please use 'rock', 'paper', or 'scissors'.";
  }

  if (player1 === player2) {
    return "Draw!";
  }

  const winConditions: Record<Move, Move> = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };

  if (winConditions[player1 as Move] === player2) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
}

console.log(rockPaperScissors("scissors", "paper")); 
console.log(rockPaperScissors("scissors", "rock"));  
console.log(rockPaperScissors("paper", "paper"));    
console.log(rockPaperScissors("jonas", "petras"));    