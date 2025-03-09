/*
function getHumanChoice() {
    let choice = prompt("Let's play rock (r), paper (p), scissors (s)! Choice: ");

    if (choice === 'r') {
        getComputerChoice();
    }

    function getComputerChoice(choice) {
        if (choice === 'r') {
            let random = Math.random();
            if (random >= 0 || random <= 0.165) {
                return console.log('You lost. Paper win against rock.')
            } else if (random >= 0.165 || random <= 0.33) {
                return console.log('You lost. Scissors win against rock... ?')
            }
        }
    }

    return choice;
}
*/

/*
function game() {
    let choice = prompt("Let's play rock, paper, scissors: ");
    if (choice === "r") {
        let randomChoice = Math.random();
        if (randomChoice >= 0 && randomChoice <= 0.33) {
            return console.log("Rock. Draw");
        } else if (randomChoice >= 0.33 && randomChoice <= 0.66) {
            return console.log("You lost. Paper beats rock.")
        } else {
            return console.log("You won. Rock beats scissors.");
        }
    }

    else if (choice === "p") {
        let randomChoice = Math.random();
        if (randomChoice >= 0 && randomChoice <= 0.33) {
            return console.log("You won. Paper beats rock.");
        } else if (randomChoice >= 0.33 && randomChoice <= 0.66) {
            return console.log("Paper. Draw.");
        } else {
            return console.log("You lost. Scissors beats paper.");
        }
    }

    else if (choice === "s") {
        let randomChoice = Math.random();
        if (randomChoice >= 0 && randomChoice <= 0.33) {
            return console.log("You lost. Rock beats scissors.");
        } else if (randomChoice >= 0.33 && randomChoice <= 0.66) {
            return console.log("You won. Scissors beats paper");
        } else {
            return console.log("Scissors. Draw.");
        }
    }

}

game()
*/


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