function getComputerChoice () {

    const random = Math.random();

    if (random < 0.33) {

        return "rock";
    }
    else if (random < 0.66){   
        
        return "paper";
    }
    else return "scissors";

}

console.log(getComputerChoice())


function getHumanChoice () {
    const HumanHand = prompt("Rock, Paper, Scissors?!");
    return HumanHand.toLowerCase();

}

//console.log(getHumanChoice());

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
     humanChoice = humanChoice.toLowerCase();

     if (humanChoice === computerChoice) {

        console.log("It's a tie!!");
     
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win!! ${humanChoice} beats ${computerChoice}!!`)
    } else {
        computerScore++;
        console.log(`You lose!! ${computerChoice} beats ${humanChoice}!!`)
    }

}