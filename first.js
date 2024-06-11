let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randix = Math.floor(Math.random() * 3);
    return options[randix];
}

const drawGame = () => {
    console.log("game was a draw");
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genComputerChoice();
    console.log("comp choice = ", compChoice);
    let userWin=true;

    if(userChoice === compChoice) {
        drawGame();
    } else if (userChoice === "paper") {
        userWin = (compChoice == "scissors") ? false:true;
    } else if (userChoice === "rock") {
        userWin = (compChoice == "paper") ? false:true;
    } else {
        userWin = (compChoice == "rock") ? false:true;
    }
}; 

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
    });
});