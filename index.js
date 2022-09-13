//Computer random choice
function getComputerChoice() {
  const rando = Math.floor(Math.random() * 3 + 1);
  if (rando === 1) {
    return "rock";
  } else if (rando === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
//rock beats scissors
//scissors beats paper
// paper beats rock

function playRound(computerSelection, playerSelection) {
  computerSelection = getComputerChoice();
  console.log(computerSelection);
  playerSelection = "rock";
  console.log(playerSelection);

  if (computerSelection === playerSelection) {
    console.log("its a draw");
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    console.log("you lost");
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    console.log("you lost");
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    console.log("you lost");
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    console.log("you won");
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    console.log("you won");
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    console.log("you won");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}
console.log(game());
