// Scores
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

// Computer Choice
function getComputerChoice() {
    const random = Math.random();
    if (random < 0.33) return "rock";
    else if (random < 0.66) return "paper";
    else return "scissors";
}

// Play a round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    let resultMessage = "";

    if (humanChoice === computerChoice) {
        resultMessage = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultMessage = `You win!! ${humanChoice} beats ${computerChoice}!!`;
    } else {
        computerScore++;
        resultMessage = `You lose!! ${computerChoice} beats ${humanChoice}!!`;
    }

    roundsPlayed++;

    // Update UI scores
    document.querySelector('.humanScore').textContent = `PLAYER : ${humanScore}`;
    document.querySelector('.computerScore').textContent = `COMPUTER : ${computerScore}`;

    // Update UI round result
    document.querySelector('.resultMessage').textContent = resultMessage;

    // Check if max rounds reached
    if (roundsPlayed === maxRounds) {
        let finalMessage = "";
        if (humanScore > computerScore) {
            finalMessage = `You win the game`;
        } else if (computerScore > humanScore) {
            finalMessage = `Computer wins the game!`;
        } else {
            finalMessage = `It's a tie`;
        }

        // Update UI with final message
        document.querySelector('.resultMessage').textContent = finalMessage;

        // Disable further clicks
        document.querySelectorAll('.choice').forEach(choice => choice.style.pointerEvents = 'none');

        // Show Play Again button only now
        document.querySelector('.playAgainButton').style.display = 'block';
    }
}

// Add event listeners to images
document.querySelectorAll('.choice').forEach(choice => {
    choice.addEventListener('click', () => {
        const humanChoice = choice.getAttribute('data-choice');
        playRound(humanChoice, getComputerChoice());
    });
});

// Play Again button
document.querySelector('.playAgainButton').addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;

    document.querySelector('.humanScore').textContent = `PLAYER : ${humanScore}`;
    document.querySelector('.computerScore').textContent = `COMPUTER : ${computerScore}`;
    document.querySelector('.resultMessage').textContent = 'Make your choice!';

    document.querySelectorAll('.choice').forEach(choice => choice.style.pointerEvents = 'auto');

    document.querySelector('.playAgainButton').style.display = 'none';
});
