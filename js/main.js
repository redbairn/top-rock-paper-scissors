// console.log("Hello World");

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    return choice;
}


function getHumanChoice(){
    let choice = prompt("What's your choice? (rock, paper, or scissors)");

    if (choice.toLowerCase() === "rock") {
        return 0;
    } else if (choice.toLowerCase() === "paper") {
        return 1;
    } else if (choice.toLowerCase() === "scissors") {
        return 2;
    } else {
        console.log("Invalid choice. Please try again.");
        return getHumanChoice(); // Prompt again for valid input
    }
}

// Initialize scores
let computerScore = 0;
let humanScore = 0;

// Function to play a round
function playRound(humanChoice, computerChoice){

    console.log(`The human chose: ${["Rock", "Paper", "Scissors"][humanChoice]}`);
    console.log(`The computer chose: ${["Rock", "Paper", "Scissors"][computerChoice]}`);


    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    } else if ((humanChoice === 0 && computerChoice === 2) ||
               (humanChoice === 1 && computerChoice === 0) ||
               (humanChoice === 2 && computerChoice === 1)) {
        humanScore++;
        console.log("You win this round!");
    } else {
        computerScore++;
        console.log("You lose this round!");
    }

    console.log(`Current Score - Computer: ${computerScore}, Human: ${humanScore}`);
}

// Function to play the game (best of 5 rounds, for example)
function playGame() {
    const rounds = 5;

    for (let i = 0; i < rounds; i++) {
        console.log(`Round ${i + 1}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (humanScore < computerScore) {
        console.log("The computer won the game!");
    } else {
        console.log("The game ended in a tie!");
    }
}

// Start the game
playGame();