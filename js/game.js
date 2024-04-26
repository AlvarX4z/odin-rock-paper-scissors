let computerScore = 0;
let humanScore = 0;

function getHumanChoice() {
  return prompt("Choose between rock, paper and scissors:").toLocaleLowerCase();
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    calculateRoundWinner(computerChoice, "paper", "scissors");
  } else if (humanChoice === "paper") {
    calculateRoundWinner(computerChoice, "scissors", "rock");
  } else {
    calculateRoundWinner(computerChoice, "rock", "paper");
  }

  console.log(
    `You chose '${humanChoice}' and the computer '${computerChoice}'.\nScore: Player ${humanScore} - ${computerScore} Computer`
  );
}

function calculateRoundWinner(computerChoice, winningChoice, losingChoice) {
  if (computerChoice === winningChoice) {
    ++computerScore;
  } else if (computerChoice === losingChoice) {
    ++humanScore;
  }
}

playRound(getHumanChoice(), getComputerChoice());
