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
        else if (winner === "computer") {
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
    if (computerNumberOfWins > playerNumberOfWins) {
        winner = "computer";
    }
    else if (playerNumberOfWins > computerNumberOfWins) {
        winner = "player";
    }
    else if (playerNumberOfWins === computerNumberOfWins) {
        winner = "tie";
    }

    // print the winner message to the user
    if (winner === "computer") {
        console.log(`Sorry mate, the computer beat you at rock paper scissors with a final score of ${computerNumberOfWins} to ${playerNumberOfWins}`);
    }
    else if (winner === "player") {
        console.log(`You won! You defeated the computer at rock paper scissors with a final score of ${playerNumberOfWins} to ${computerNumberOfWins}`);
    }
    else if (winner === "tie") {
        console.log(`It's a full-on Tie! What a Match! the final score is ${playerNumberOfWins} to ${computerNumberOfWins}`);
    }
    else {
        console.log("error, there appears to be no winner.");
    }


}

// create a function called rockPaperScissorsRound, that returns the winner or a rock paper scissors round. 
function rockPaperScissorsRound() {

    // Ask for user input, storing it in a variable. 
    let userInput = prompt("choose rock, paper, or scissors (type it in)");
    let upperUserInput = userInput.toUpperCase().trim();

    // If the upperUserInput doesnt equal ROCK, PAPER, or SCISSORS, keep asking for valid input
    while (upperUserInput !== "ROCK" && upperUserInput !== "PAPER" && upperUserInput !== "SCISSORS") {
        userInput = prompt("Invalid input. Please type rock, paper, or scissors.");
        upperUserInput = userInput.toUpperCase().trim();
    }

    // check if user input is either rock, paper, or scissors, and store it in user choice
    // initialize a variable called playerChoice
    let playerChoice = '';

    // first, check if it's rock
    if (upperUserInput === "ROCK") {
        playerChoice = "Rock";
    }

    // then, check if it's paper
    else if (upperUserInput === "PAPER") {
        playerChoice = "Paper";
    }

    // finally, check if it's scissors
    else if (upperUserInput === "SCISSORS") {
        playerChoice = "Scissors";
    }

    // if it was none of these, set playerChoice to Invalid
    else {
        playerChoice = "Invalid"
    }

    // store a random choice between rock paper and scissors for the computer
    // first, set a variable to a random number between 1 and 3
    let computerInt = Math.floor(Math.random() * 3) + 1;

    // then, set another variable to rock, paper, or scissors, depending on computerInt
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

    // print what the computer chose
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
        console.log("It's a Tie! you and the computer both chose " + playerChoice);
    }
    else {
        console.log("round winner error. compare choice returned something funky.");
    }

    // return the winner
    return winner;

    function compareChoice(playerChoice, computerChoice) {
        let winner = 'none'

        // check all possible iterations of rock paper scissors
        if (playerChoice === computerChoice) { 
            winner = "tie";
        }

        if (playerChoice === "Rock") {
            if (computerChoice === "Paper") {
                winner = "computer"; 
            }
            if (computerChoice === "Scissors")
                winner = "player";
        }    
        if (playerChoice === "Paper") {
            if (computerChoice === "Rock") {
                winner = "player"; 
            }
            if (computerChoice === "Scissors")
                winner = "computer";
        }    
        if (playerChoice === "Scissors") {
            if (computerChoice === "Paper") {
                winner = "player"; 
            }
            if (computerChoice === "Rock")
                winner = "computer";
        }    

        return winner;
    }

}
