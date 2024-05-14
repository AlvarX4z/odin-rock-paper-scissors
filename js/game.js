const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return ROCK;
    case 2:
      return PAPER;
    case 3:
      return SCISSORS;
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === ROCK) {
    calculateRoundWinner(computerChoice, PAPER, SCISSORS);
  } else if (playerChoice === PAPER) {
    calculateRoundWinner(computerChoice, SCISSORS, ROCK);
  } else {
    calculateRoundWinner(computerChoice, ROCK, PAPER);
  }

  console.log(
    `You chose '${playerChoice}' and the computer '${computerChoice}'.\nScore: Player ${playerScore} - ${computerScore} Computer`
  );
}

function calculateRoundWinner(computerChoice, winningChoice, losingChoice) {
  if (computerChoice === winningChoice) {
    computerScore++;
  } else if (computerChoice === losingChoice) {
    playerScore++;
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const playerChoice = button.textContent.toLocaleLowerCase();
    playRound(playerChoice, getComputerChoice());
  });
});
