function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    if(randomNumber === 0){
        return "Rock";
    }
    else if(randomNumber ===1){
        return "Paper";
    }
    else {
        return "Scissor";
    }
}

function getHumanChoice(){
    let userInput = prompt(" Rock, Paper, Scissor"); 
    userInput = userInput.toLowerCase();
    if(userInput === "rock" || userInput ==="r"){
        return "User Selected Rock";
    }
    else if(userInput === "paper" || userInput === "p"){
        return "User Selected Paper";
    }
    else if(userInput === "scissor" || userInput === "s"){
        return "Scissor";
    }
    else {
        return "Selection Not Correct or Empty";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "It's a DRAW!!!!"
    }
    else if(
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) return "You WIN"

    return getHumanChoice()
}
console.log(playRound);