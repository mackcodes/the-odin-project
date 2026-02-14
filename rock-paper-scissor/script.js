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

function getHumanChoice(){  // it gets the human choice
    let userInput = prompt(" Rock, Paper, Scissor"); 
    userInput = userInput.toLowerCase();  // this is to make the input case-insensitive
    if(userInput === "rock" || userInput ==="r"){
        return "rock";
    }
    else if(userInput === "paper" || userInput === "p"){
        return "paper";
    }
    else if(userInput === "scissor" || userInput === "s"){
        return "scissors";
    }
    else {
        return null;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){  // play the round
    if(humanChoice === computerChoice){
        return `It's a DRAW!!!! You both chose ${humanChoice}.`;
    }
    else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
    humanScore++;
    return `You WIN!!! ${humanChoice} beats ${computerChoice}`;  // fetch the choices
    }
    else {
        computerScore++;
        return `You LOSE!!! ${computerChoice} beats ${humanChoice}`;
    }
}

function playGame(){   // this function make the game of 5 rounds
    humanScore = 0;
    computerScore = 0;
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        alert(playRound(humanSelection, computerSelection));
    }
    let finalMessage;
    if(humanScore > computerScore){
        finalMessage = "You win the game!";
    }
    else if (computerScore > humanScore){
        finalMessage = "Computer wins the game!";
    }
    else{
        finalMessage = "The game is a draw!!";
    }
    alert(`Final Score:
            Human: ${humanScore}
            Computer: ${computerScore}

            ${finalMessage}`);
    }
playGame();  // executes the function