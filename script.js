// The goal of this project is to make a five round
// rock paper scissors game that the player plays against 
// the computer. 
// The user interface will be the browser console. 
// the input will be a string from the user... either rock, paper, or scissors
// the output will be the computer choice and the result of the round. 
// the FINAL output will be the first player to win 3 out of 5 rounds, 
// along with some congratulatory message.  

// play rock paper scissors
rockPaperScissorsGame();

// create a new function called rockPaperScissorsGame
function rockPaperScissorsGame () {

    // tell the user about the game
    alert("Welcome to Rock Paper Scissors! \n this will be an exciting game of RPS against the computer. "
    + "The results will be displayed in the browser's console log.");

    // create a variable called computerNumberOfWins, and initialize it to zero. 
    let computerNumberOfWins = 0;

    // create a variable called playerNumberOfWins, and initialize THAT to zero. 
    let playerNumberOfWins = 0;

    // do this until playerNumberOfWins is 3 OR computerNumberOfWins is 3
    let winnerFound = false;
    for (let i = 0; i < 5; i++) {

        // play a round of rock paper scissors, and return the winner
        let winner = rockPaperScissorsRound();

        // if the winner was player, increment playerNumberOfWins
        if (winner === "player") {
            playerNumberOfWins++;
        }
        // else, increment computerNumberOfWins
        else {
            computerNumberOfWins++;
        }

        // if the player has 3 wins or the computer has 3 wins, stop the game. 
        if (playerNumberOfWins >= 3) {
            winnerFound = true;
        }
        if (computerNumberOfWins >= 3) {
            winnerFound = true;
        }

        if (winnerFound) {
            break;
        }
    }

    // Determine who the winner is
    let winner = ''; 
    if (computerNumberOfWins >= 3) {
        winner = "computer";
    }
    else if (playerNumberOfWins >= 3) {
        winner = "player";
    }

    // print the winner message to the user
    if (winner === "computer") {
        console.log(`Sorry mate, the computer beat you at rock paper scissors with a final score of ${computerNumberOfWins} to ${playerNumberOfWins}`);
    }
    else if (winner === "player") {
        console.log(`You won! You defeated the computer at rock paper scissors with a final score of ${playerNumberOfWins} to ${computerNumberOfWins}`);
    }
    else {
        console.log("error, there appears to be no winner.");
    }


}

// create a function called rockPaperScissorsRound, that returns the winner or a rock paper scissors round. 
function rockPaperScissorsRound() {

    // Ask for user input, storing it in a variable. 
    let userInput = prompt("choose rock, paper, or scissors (type it in)")

    // check if user input is either rock, paper, or scissors, and store it in user choice
    // initialize a variable called userChoice
    let userChoice = '';

    // first, check if it's rock
    if (userInput.toUpperCase() === "ROCK") {
        userChoice = "Rock";
    }

    // then, check if it's paper
    else if (userInput.toUpperCase() === "PAPER") {
        userChoice = "Paper";
    }

    // finally, check if it's scissors
    else if (userInput.toUpperCase() === "SCISSORS") {
        userChoice = "Scissors";
    }

    // if it was none of these, set userChoice to Invalid
    else {
        userChoice = "Invalid"
    }

    console.log("you chose " + userChoice);


    // store a random choice between rock paper and scissors for the computer

    // compare the choices, and decide the winner

    // print the results of the round to the console. 

    // return the winner
    return "computer";
}
