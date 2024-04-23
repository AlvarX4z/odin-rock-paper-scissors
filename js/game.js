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

function getHumanChoice() {
  return prompt("Choose between rock, paper and scissors:").toLocaleLowerCase();
}

let computerScore = 0;
let humanScore = 0;

console.log(getComputerChoice());
console.log(getHumanChoice());
