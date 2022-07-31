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
    for (let i = 0; i < 5; i++) {

        // play a round of rock paper scissors, and return the winner
        let winner = rockPaperScissorsRound();
        console.log(winner);

        // if the winner was player, increment playerNumberOfWins

        // else, increment computerNumberOfWins

        // if the player has 3 wins or the computer has 3 wins, stop the game. 

    }
    // print the final winner message

}

// create a function called rockPaperScissorsRound, that returns the winner or a rock paper scissors round. 
function rockPaperScissorsRound() {
    return "player"; // temporary
    // Ask for their input, storing it in a variable. 

    // store a random choice between rock paper and scissors for the computer

    // compare the choices, and decide the winner

    // print the results of the round to the console. 
}
