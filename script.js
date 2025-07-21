let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let gameOver = false;

const roundResult = document.querySelector("#round-result");
const scoreDisplay = document.querySelector("#score");
const finalMessage = document.querySelector("#final-message");

const buttons = document.querySelectorAll(".game-button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonTextContent = button.textContent;
        choiceButton(buttonTextContent)
    });
});

const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", () => resetButton());

function getComputerChoice() {
    let randomChoice = Math.random();
    if (randomChoice < 0.34) return "rock";
    else if (randomChoice < 0.67) return "paper";
    else return "scissors";
}

function resetButton() {
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`
    finalMessage.textContent = "";
    gameOver = false;
}

function choiceButton(choice) {
    if (gameOver) return;

    let computerChoice = getComputerChoice();
    let resultText = "";

    if (choice === "rock" && computerChoice === "scissors" ||
        choice === "paper" && computerChoice === "rock" ||
        choice === "scissors" && computerChoice === "paper") {
        playerScore++;
        resultText = `You won! ${choice} beats ${computerChoice}.`;
    }
    else if (choice == computerChoice) {
        resultText = `Draw. You both chose ${choice}.`;
    }
    else {
        computerScore++;
        resultText = `You lose! ${computerChoice} beats ${choice}.`;
    }

    roundsPlayed++;

    roundResult.textContent = resultText;
    scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        gameOver = true;
        if (playerScore === 5) {
            finalMessage.textContent = "You won!";
        }
        else if (computerScore === 5) {
            finalMessage.textContent = "You lose!";
        }
    }
}