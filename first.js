let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let uscore = document.querySelector("#yourscore");
let cscore = document.querySelector("#computerscore");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randix = Math.floor(Math.random() * 3);
    return options[randix];
}

const win = (userWin, userChoice, compChoice) => {
    if(userWin) {
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
        userScore++;
        uscore.innerText = userScore;


        
    } else {
        console.log("Computer wins");
        msg.innerText = `Computer wins! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "Red";
        compScore++;
        cscore.innerText = compScore;
        
    }
}

const drawGame = () => {
    msg.innerText = "It was a draw!";
}

const playGame = (userChoice) => {
    const compChoice = genComputerChoice();

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin=true;
      if (userChoice === "paper") {
        userWin = (compChoice == "scissors") ? false:true;
    } else if (userChoice === "rock") {
        userWin = (compChoice == "paper") ? false:true;
    } else {
        userWin = (compChoice == "rock") ? false:true;
    }
    win(userWin, compChoice, userChoice);
}
}; 

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});