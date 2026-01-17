// Scores

let humanScore = 0
let computerScore = 0
let roundsPlayed = 0;
const maxRounds = 5;

//Computer Choice

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

// Play a round


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    

    if (humanChoice === computerChoice) {
        console.log("It's a tie!!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundsPlayed++; 
        console.log(`You win!! ${humanChoice} beats ${computerChoice}!!`);
    } else {
        computerScore++;
        roundsPlayed++; 
        console.log(`You lose!! ${computerChoice} beats ${humanChoice}!!`);
    }

    console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);

    // Update UI scores
    document.querySelector('.humanScore').textContent = `PLAYER : ${humanScore}`;
    document.querySelector('.computerScore').textContent = `COMPUTER : ${computerScore}`;


    // Check if 5 rounds are over
    if (roundsPlayed === maxRounds) {
        if (humanScore > computerScore) {
            console.log(`🎉 You win the game! Final score: You ${humanScore} - Computer ${computerScore}`);
        } else if (computerScore > humanScore) {
            console.log(`💻 Computer wins the game! Final score: You ${humanScore} - Computer ${computerScore}`);
        } else {
            console.log(`🤝 It's a tie game! Final score: You ${humanScore} - Computer ${computerScore}`);
        }

        // Disable buttons after game
        document.getElementById('firstButton').disabled = true;
        document.getElementById('secondButton').disabled = true;
        document.getElementById('thirdButton').disabled = true;
    }
}


// Button Event Listeners

let firstBtn = document.getElementById('firstButton');
    firstBtn.addEventListener('click', function (){
     playRound("rock", getComputerChoice());
});

let secondBtn = document.getElementById('secondButton');
    secondBtn.addEventListener('click', function (){
     playRound("paper", getComputerChoice());
});
let thirdBtn = document.getElementById('thirdButton');
    thirdBtn.addEventListener('click', function (){
     playRound("scissors", getComputerChoice());
});
