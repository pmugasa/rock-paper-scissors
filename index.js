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
  if (computerSelection === playerSelection) {
    const div = document.querySelector("#results");
    div.textContent = "Its a draw";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    //when computer wins
    ++compScore;
    const compResult = document.querySelector("#comp");
    compResult.textContent = compScore;
    const div = document.querySelector("#results");
    div.textContent = "you lost";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    ++compScore;
    const compResult = document.querySelector("#comp");
    compResult.textContent = compScore;
    const div = document.querySelector("#results");
    div.textContent = "you lost";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    ++compScore;
    const compResult = document.querySelector("#comp");
    compResult.textContent = compScore;
    const div = document.querySelector("#results");
    div.textContent = "you lost";
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    //when player wins
    ++playerScore;
    const playerResult = document.querySelector("#player");
    playerResult.textContent = playerScore;
    const div = document.querySelector("#results");
    div.textContent = "you won";
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    ++playerScore;
    const playerResult = document.querySelector("#player");
    playerResult.textContent = playerScore;
    const div = document.querySelector("#results");
    div.textContent = "you won";
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    ++playerScore;
    const playerResult = document.querySelector("#player");
    playerResult.textContent = playerScore;
    const div = document.querySelector("#results");
    div.textContent = "you won";
  }
}

//play 5 rounds of the game
/*
function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}
*/
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

// Rock button

//getting hold of the buttons
const buttons = document.querySelectorAll("button");

// adding event listeners to the buttons
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let playerSelection = btn.getAttribute("value");
    let computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection);
  });
});

const compResult = document.querySelector("#comp");
compResult.textContent = compScore;

const playerResult = document.querySelector("#player");
playerResult.textContent = playerScore;
