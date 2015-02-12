////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move == null) {
        move = getInput();
        return "You played " + move;
    } else {
        return "You played " + move;
    }
}

function getComputerMove(move) {
    if (move == null) {
        return "The computer played " + randomPlay();
    } else {
        return "The computer played " + move;
    }
}

function getWinner(playerMove,computerMove) {
    if (playerMove == computerMove) {
        return "tie";
    } else if (playerMove == "rock") {
        (computerMove == "scissors")? "player" : "computer"
      }
      else if (playerMove == "scissors") {
        (computerMove == "paper")? "player" : "computer"    
      }
      else if (playerMove == "paper"){
        (computerMove == "rock")? "player" : "computer"
      }
}

function playToFive() {
    console.log("Let's play Rock Paper Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // This function should continue to play Rock Paper Scissors until either the player or the computer has won five times.

    // After each 'round', display some text in the console indicating who played what, who won, and what the current scoreboard looks like.
    // For example,
    //  console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    //  console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    return [playerWins, computerWins];
}

