/* Gets a random choice based on a random number.*/

function getComputerChoice() {
    let randomChoice = Math.random();
    if (randomChoice < 0.34) return "rock";
    else if (randomChoice < 0.67) return "paper";
    else return "scissors";
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonTextContent = button.textContent;
        choiceButton(buttonTextContent)
    });
});

function choiceButton(choice) {
    let computerChoice = getComputerChoice();
    if (choice === "rock" && computerChoice === "scissors" ||
        choice === "paper" && computerChoice === "rock" ||
        choice === "scissors" && computerChoice === "paper") {
        console.log("You won.");
    }
    else if (choice == computerChoice) {
        console.log("Draw.");
    }
    else {
        console.log("You lose.");
    }
}