// Function to get the computer's choice
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choice;
}

// Function to get the human's choice based on button clicks
function getHumanChoice(user_input) {
    let choice = user_input;

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

// Initialize scores and rounds
let computerScore = 0;
let humanScore = 0;
let roundsPlayed = 0;
const totalRounds = 5;

// Function to play a round
function playRound(humanChoice, computerChoice) {

    const content3 = document.createElement("p");
    content3.textContent = `The human chose: ${["Rock", "Paper", "Scissors"][humanChoice]}`;
    content1.appendChild(content3);

    const content4 = document.createElement("p");
    content4.textContent = `The computer chose: ${["Rock", "Paper", "Scissors"][computerChoice]}`;
    content1.appendChild(content4);

    if (humanChoice === computerChoice) {
        const content5 = document.createElement("p");
        content5.textContent = "It's a draw!";
        content1.appendChild(content5);
    } else if ((humanChoice === 0 && computerChoice === 2) ||
               (humanChoice === 1 && computerChoice === 0) ||
               (humanChoice === 2 && computerChoice === 1)) {
        humanScore++;
        const content6 = document.createElement("p");
        content6.textContent = "You win this round!";
        content6.setAttribute("style", "color: green; font-weight:bold; font-style: italic;");
        content1.appendChild(content6);
    } else {
        computerScore++;
        const content7 = document.createElement("p");
        content7.textContent = "You lose this round!";
        content7.setAttribute("style", "color: red; font-weight:bold; font-style: italic;");
        content1.appendChild(content7);
    }

    const content8 = document.createElement("p");
    content8.textContent = `Current Score - Computer: ${computerScore}, Human: ${humanScore}`;
    content8.setAttribute("style", "font-weight:bold;");
    content1.appendChild(content8);

    // Increment rounds
    roundsPlayed++;

    // Check if the game is over after 5 rounds
    if (roundsPlayed === totalRounds) {
        if (humanScore > computerScore) {
            const finalMessage = document.createElement("p");
            finalMessage.textContent = "You won the game!";
            finalMessage.setAttribute("style", "color: green; font-weight:bold;");
            content1.appendChild(finalMessage);
        } else if (humanScore < computerScore) {
            const finalMessage = document.createElement("p");
            finalMessage.textContent = "The computer won the game!";
            finalMessage.setAttribute("style", "color: red; font-weight:bold;");
            content1.appendChild(finalMessage);
        } else {
            const finalMessage = document.createElement("p");
            finalMessage.textContent = "The game ended in a tie!";
            finalMessage.setAttribute("style", "font-weight:bold;");
            content1.appendChild(finalMessage);
        }

        // Disable buttons after game ends
        choices.forEach((choice) => {
            choice.disabled = true;
        });

        // Show reset button
        resetButton.style.display = "inline";
    }
}

// Function to reset the game
function resetGame() {
    computerScore = 0;
    humanScore = 0;
    roundsPlayed = 0;
    content1.innerHTML = ""; // Clear the message board

    // Re-enable the game buttons
    choices.forEach((choice) => {
        choice.disabled = false;
    });

    // Hide the reset button
    resetButton.style.display = "none";
}

// Function to play the game
function playGame(choices) {
    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            if (roundsPlayed < totalRounds) {
                let input = choice.id;
                const humanSelection = getHumanChoice(input);
                const computerSelection = getComputerChoice();
                playRound(humanSelection, computerSelection);
            }
        });
    });
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");
const choices = buttons;

// Create a reset button
const resetButton = document.createElement("button");
resetButton.textContent = "Reset Game";
resetButton.setAttribute("style", "margin-top: 10px;");
resetButton.addEventListener("click", resetGame);
resetButton.style.display = "none"; // Initially hidden

// Add the reset button to the container
container.appendChild(resetButton);

// Create the message board div
const content1 = document.createElement("div");
content1.classList.add("messageBoard");
content1.setAttribute("style", "border-color: black; border-style: solid; background: yellow; padding: 1%");
container.appendChild(content1);

// Start the game
playGame(choices);
