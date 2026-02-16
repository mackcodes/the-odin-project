const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const roundResult = document.querySelector("#roundResult");
const pScore = document.querySelector(".pScore");
const cScore = document.querySelector(".cScore");

rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));


let playerScore = 0;
let computerScore = 0;
let gameOver = false;


function getComputerChoice(){   // this function gets the computer choice
    let randomNumber = Math.floor(Math.random()*3);
    if(randomNumber === 0){
        return "rock";
    }
    else if(randomNumber ===1){
        return "paper";
    }
    else {
        return "scissors";
    }
}



function playRound(playerSelection){  // play the round
    if(gameOver) return;
    const computerChoice = getComputerChoice();
    if(playerSelection === computerChoice){
        const drawResponse = `It's a DRAW!!!! You both chose ${playerSelection}.`;
        return drawResponse;
    }
    else if(
        (playerSelection === "rock" && computerChoice === "scissors") ||
        (playerSelection === "paper" && computerChoice === "rock") ||
        (playerSelection === "scissors" && computerChoice === "paper")
    ) {
    playerScore++;
    const winResponse = `You WIN!!! ${playerSelection} beats ${computerChoice}`;  // fetch the choices
    return winResponse;
    }
    else {
        computerScore++;
        const loseResponse = `You LOSE!!! ${computerChoice} beats ${playerSelection}`;
        return loseResponse;
    }
}

function updateScoreDisplay(){
    pScore.textContent = `Player Score: ${playerScore}`;
    cScore.textContent = `Computer Score: ${computerScore}`;
}


function checkGameOver(){  // check and displays the round score 
    if(playerScore === 5){
        roundResult.textContent = "You won the game!";
        gameOver = true;
    }
    else if(computerScore === 5){
        roundResult.textContent = "Computer won the game!";
        gameOver = true;
    }
}

function handleClick(selection){   // handles the clicks of the three buttons
    const result = playRound(selection);
    if(!gameOver){
        roundResult.textContent = result;
        updateScoreDisplay();
        checkGameOver();
    }
}