/* Gets a random choice based on a random number.*/

function getComputerChoice() {
    let randomChoice = Math.random();
    if (randomChoice >= 0 && randomChoice <= 0.33) {
        return "rock";
    }

    else if (randomChoice >= 0.33 && randomChoice <= 0.66) {
        return "paper";
    }

    else {
        return "scissors";
    }
}

/* Based on user's input, returns a string.*/

function getHumanChoice() {
    let choice = prompt("Let's play ROCK (R), PAPER (P), SCISSORS (S): ").toLowerCase();

    if (choice === "R" || choice === "r" || choice === "rock") {
        return "rock";
    }

    else if (choice === "P" || choice === "p" || choice === "paper") {
        return "paper";
    }

    else if (choice === 'S' || choice === "s" || choice === "scissors") {
        return "scissors";
    }
}

/* Main game function. */

function playGame() {
    let humanScore = 0
    let computerScore = 0
    let draw = 0

    function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log(`You chose: ${humanChoice}`);
    console.log(`Opponent chose: ${computerChoice}`);

    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You won.");
            humanScore++;
        }
    else if (humanChoice === computerChoice) {
        console.log("Draw.");
        draw++;
    } else {
        console.log("You lost.");
        computerScore++;
    }
    }

    let i = 0
    while (i <= 4) {
        playRound();
        i++;
    }

    if (humanScore > computerScore) {
        console.log(`\n- You won the game. Your score: ${humanScore}`);
        console.log(`- Opponent's score: ${computerScore}`);
        console.log(`- Draw: ${draw}`);
    }
    else if (humanScore < computerScore) {
        console.log(`\n- You lost. Your score: ${humanScore}`);
        console.log(`- Opponent's score: ${computerScore}`);
        console.log(`- Draw: ${draw}`);
    } else {
        console.log("\n- Round draw. -\n");
    }
}

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
    let humanChoice = 'rock';
    let computerChoice = getComputerChoice();

    if (computerChoice == 'scissors') {
        console.log("You won.");
    } else if (computerChoice == 'paper') {
        console.log("You lose.");
    } else {
        console.log("Draw.");
    }
});

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
    let humanChoice = 'paper';
    let computerChoice = getComputerChoice();

    if (computerChoice == 'rock') {
        console.log("You won.");
    } else if (computerChoice == 'scissors') {
        console.log("You lose");
    } else {
        console.log("Draw.");
    }
});

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
    let humanChoice = 'scissors';
    let computerChoice = getComputerChoice();

    if (computerChoice == 'paper') {
        console.log("You won.");
    } else if (computerChoice == 'rock') {
        console.log("You lose");
    } else {
        console.log("Draw.");
    }
});