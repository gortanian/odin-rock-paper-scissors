// The goal of this project is to make a five round
// rock paper scissors game that the player plays against 
// the computer. 
// The user interface will be the browser console. 
// the input will be a string from the user... either rock, paper, or scissors
// the output will be the computer choice and the result of the round. 
// the FINAL output will be the first player to win 3 out of 5 rounds, 
// along with some congratulatory message.  

rockPaperScissorsGame();

// create a new function called rockPaperScissorsGame
function rockPaperScissorsGame() {

    const buttons = document.querySelectorAll(".button");

    // add items for both sides of the scoreboard
    const playerScoreboard = document.querySelector(".player");
    const computerScoreboard = document.querySelector(".computer");
    const mainHeader = document.querySelector(".main-header");
    const mainContent = document.querySelector(".main-content");

    let playerChoice = null;
    let computerNumberOfWins = 0;
    let playerNumberOfWins = 0;
    let winnerFound = false;

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            if (button.classList.contains("rock-button")) {
                playerChoice = "Rock";
            }
            else if (button.classList.contains("paper-button")) {
                playerChoice = "Paper";
            }
            else if (button.classList.contains("scissors-button")) {
                playerChoice = "Scissors";
            }

            if (playerChoice && !winnerFound) {
                let roundWinner = rockPaperScissorsRound(playerChoice);

                playerScoreboard.style.visibility="visible";
                computerScoreboard.style.visibility="visible";
                mainContent.style.visibility="visible";

                mainHeader.textContent="RPS";

                // if the winner was player, increment playerNumberOfWins
                if (roundWinner === "player") {
                    playerNumberOfWins++;
                }
                // else, increment computerNumberOfWins
                else if (roundWinner === "computer") {
                    computerNumberOfWins++;
                }
                // update the score
                updateScore(playerNumberOfWins, computerNumberOfWins);

                // reset playerChoice
                playerChoice = '';

                // if the player has 5 wins or the computer has 5 wins, stop the game. 
                if (playerNumberOfWins >= 5) {
                    winnerFound = true;
                }
                if (computerNumberOfWins >= 5) {
                    winnerFound = true;
                }

                if (winnerFound) {
                    // Do things and stuff
                    endGame(playerNumberOfWins, computerNumberOfWins);
                }
            }

        })
    })

}

// returns the winner or a rock paper scissors round. 
function rockPaperScissorsRound(playerChoice) {

    let computerChoice = getRandomComputerChoice();

    let winner = getRoundWinner(playerChoice, computerChoice);

    updateChoices(playerChoice, computerChoice);
    updateResults(winner, playerChoice, computerChoice);

    return winner;
}

function updateScore(playerNumberOfWins, computerNumberOfWins) {

    const playerScoreboard = document.querySelector(".player-score");
    const computerScoreboard = document.querySelector(".computer-score");
    
    playerScoreboard.textContent = (playerNumberOfWins);
    computerScoreboard.textContent = (computerNumberOfWins);
}

function updateResults(winner, playerChoice, computerChoice) {
    // update the results div with winner information
    const results = document.querySelector(".results");
    if (winner === "player") {
        results.textContent = (`You win this round! ${playerChoice} beats ${computerChoice}!`);
    }
    else if (winner === "computer") {
        results.textContent = (`You lose this round. ${computerChoice} beats ${playerChoice}`)
    }
    else if (winner === "tie") {
        results.textContent = (`It's a tie! You and the computer both chose ${playerChoice}!`);
    }
    else {
        results.textContent = ("error");
    }
}

function updateChoices(playerChoice, computerChoice) {
    const choices = document.querySelector(".choices");
    choices.textContent = (`You chose ${playerChoice}, the computer chose ${computerChoice}`);
}

function getRandomComputerChoice() {
    let computerInt = Math.floor(Math.random() * 3) + 1;

    let computerChoice = '';
    if (computerInt === 1) {
        computerChoice = "Rock";
    }
    else if (computerInt === 2) {
        computerChoice = "Paper";
    }
    else if (computerInt === 3) {
        computerChoice = "Scissors";
    }
    else {
        console.log("Computer choice error");
    }
    return computerChoice;
}

function compareChoice(playerChoice, computerChoice) {
    let winner = 'none';

    // check all possible iterations of rock paper scissors
    if (playerChoice === computerChoice) {
        winner = "tie";
    }
    if (playerChoice === "Rock") {
        if (computerChoice === "Paper") {
            winner = "computer";
        }
        else if (computerChoice === "Scissors")
            winner = "player";
    }
    else if (playerChoice === "Paper") {
        if (computerChoice === "Rock") {
            winner = "player";
        }
        else if (computerChoice === "Scissors")
            winner = "computer";
    }
    else if (playerChoice === "Scissors") {
        if (computerChoice === "Paper") {
            winner = "player";
        }
        else if (computerChoice === "Rock")
            winner = "computer";
    }
    else {
        winner = "none";
    }

    return winner;
}

function getRoundWinner(playerChoice, computerChoice) {
    
    console.log("You chose " + playerChoice);
    console.log("the computer chose " + computerChoice);

    // compare the choices, and return the winner
    let winner = compareChoice(playerChoice, computerChoice);

    // print the results of the round to the console. 
    if (winner === "player") {
        console.log("You Win! " + playerChoice + " beats " + computerChoice + "!");
    }
    else if (winner === "computer") {
        console.log("You Lose! " + computerChoice + " beats " + playerChoice + "!");
    }
    else if (winner === "tie") {
        console.log("It's a Tie!");
    }
    else {
        console.log("round winner error. compare choice returned something funky.");
    }

    // return the winner
    return winner;
}

// does stuff for the end of the game
function endGame (playerNumberOfWins, computerNumberOfWins) {
    const finalWinner = document.querySelector(".final-winner");

    // Determine who the winner is
    let winner = '';
    if (computerNumberOfWins > playerNumberOfWins) {
        winner = "computer";
        finalWinner.textContent = ("Wah wah. The computer won the game.");
    }
    else if (playerNumberOfWins > computerNumberOfWins) {
        winner = "player";
        finalWinner.textContent = ("Congrats! You won the game!");
    }
    else if (playerNumberOfWins === computerNumberOfWins) {
        winner = "tie";
        finalWinner.textContent = ("Tie game! Something went wrong. This should be impossible.");
    }

    // print the winner message to the user
    if (winner === "computer") {
        console.log(`Computer wins, final score is ${computerNumberOfWins} to ${playerNumberOfWins}`);
    }
    else if (winner === "player") {
        console.log(`Player wins, final score is ${playerNumberOfWins} to ${computerNumberOfWins}`);
    }
    else if (winner === "tie") {
        console.log(`Tie game, final score is ${playerNumberOfWins} to ${computerNumberOfWins}`);
    }
    else {
        console.log("error, there appears to be no winner.");
    }
}