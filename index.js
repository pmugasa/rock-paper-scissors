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

// Score tracking
let compScore = 0;
let playerScore = 0;

//Playing round functions
function playRound(computerSelection, playerSelection) {
  computerSelection = getComputerChoice();
  console.log(computerSelection);
  playerSelection = prompt("rock, paper, scissors").toLowerCase();
  console.log(playerSelection);

  if (computerSelection === playerSelection) {
    console.log("its a draw");
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    compScore++;
    console.log("you lost");
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    compScore++;
    console.log("you lost");
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    compScore++;
    console.log("you lost");
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    playerScore++;
    console.log("you won");
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    playerScore++;
    console.log("you won");
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    playerScore++;
    console.log("you won");
  }
}

//play 5 rounds of the game
function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}

function results() {
  //determining the winner
  if (playerScore === compScore) {
    console.log("its a draw");
  } else if (playerScore > compScore) {
    console.log(
      "congratulations! you won" + " " + playerScore + " " + "out of 5 games"
    );
  } else if (playerScore < compScore) {
    console.log(
      "you lost. Computer won" + " " + compScore + " " + "out of 5 games"
    );
  }
}

console.log(game());
console.log(results());
console.log(compScore);
console.log(playerScore);