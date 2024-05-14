const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const MAXIMUM_SCORE = 5;
const MINIMUM_SCORE = 0;

let computerScore = MINIMUM_SCORE;
let playerScore = MINIMUM_SCORE;

const resultContainer = document.createElement("div");
const resultText = document.createElement("p");

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

  if (playerScore === MAXIMUM_SCORE || computerScore === MAXIMUM_SCORE) {
    resultText.textContent =
      playerScore > computerScore ? "Player wins!" : "Computer wins!";
    computerScore = MINIMUM_SCORE;
    playerScore = MINIMUM_SCORE;
  } else {
    resultText.textContent = `(${playerScore}) Player ${playerChoice} - ${computerChoice} Computer (${computerScore})`;
  }
  resultContainer.appendChild(resultText);
  document.body.append(resultContainer);
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
