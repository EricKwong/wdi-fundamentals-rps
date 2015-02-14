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
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    console.log("Player chose " + playerMove + " while Computer chose " + computerMove + ".");
    if (playerMove == computerMove) {
        return "tie";
    } else if (playerMove == "rock") {
        return (computerMove == "scissors")? "player" : "computer"
      }
      else if (playerMove == "scissors") {
        return (computerMove == "paper")? "player" : "computer"    
      }
      else if (playerMove == "paper"){
        return (computerMove == "rock")? "player" : "computer"
      }
}

function playToFive() {
    console.log("Let's play Rock Paper Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner = ""
    while (playerWins != 5 && computerWins !=5){
        winner = getWinner(getPlayerMove(), getComputerMove());
        if (winner == "player"){
            playerWins++;
        } else if (winner == "computer") {
            computerWins++;
        } else {
            console.log("Tie.");
        }
        console.log("The score is currently " + playerWins + " to " + computerWins + ".\n");
    }
    return (playerWins > computerWins)? "Player Wins" : "Computer Wins"
}

