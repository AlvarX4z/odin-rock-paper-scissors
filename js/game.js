function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

function getHumanChoice() {
  const number = parseInt(prompt("Choose a number between 1 and 3:"));
  switch (number) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
    default:
      getHumanChoice();
  }
}

let computerScore = 0;
let humanScore = 0;

console.log(getComputerChoice());
console.log(getHumanChoice());
