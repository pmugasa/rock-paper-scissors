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

// Score counter
let compScore = 0;
let playerScore = 0;

//round counter
let round = 0;

//Playing round functions
function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    const div = document.querySelector("#results");
    div.textContent = "Its a draw";
    ++round;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    //when computer wins
    ++compScore;
    ++round;
    const compResult = document.querySelector("#comp");
    compResult.textContent = compScore;
    const div = document.querySelector("#results");
    div.textContent = "you lost";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    ++compScore;
    ++round;
    const compResult = document.querySelector("#comp");
    compResult.textContent = compScore;
    const div = document.querySelector("#results");
    div.textContent = "you lost";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    ++compScore;
    ++round;
    const compResult = document.querySelector("#comp");
    compResult.textContent = compScore;
    const div = document.querySelector("#results");
    div.textContent = "you lost";
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    //when player wins
    ++playerScore;
    ++round;
    const playerResult = document.querySelector("#player");
    playerResult.textContent = playerScore;
    const div = document.querySelector("#results");
    div.textContent = "you won";
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    ++playerScore;
    ++round;
    const playerResult = document.querySelector("#player");
    playerResult.textContent = playerScore;
    const div = document.querySelector("#results");
    div.textContent = "you won";
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    ++playerScore;
    ++round;
    const playerResult = document.querySelector("#player");
    playerResult.textContent = playerScore;
    const div = document.querySelector("#results");
    div.textContent = "you won";
  }
}

// results after 5 rounds
function results() {
  const finale = document.querySelector("#finale");
  //determining the winner
  if (playerScore === compScore) {
    finale.textContent = "Its a draw";
  } else if (playerScore > compScore) {
    finale.textContent =
      "Congratulations! You won" + " " + playerScore + " " + "out of 5 games";
  } else if (playerScore < compScore) {
    finale.textContent =
      "You lost. Computer won" + " " + compScore + " " + "out of 5 games";
  }
}

//getting hold of the buttons
const buttons = document.querySelectorAll("button");

// adding event listeners to the buttons
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let playerSelection = btn.getAttribute("value");
    let computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection);
    //Round counter
    const roundCounter = document.querySelector("#counter");
    roundCounter.textContent = "Round " + round;

    if (round === 5) {
      results();
      //disabling the buttons  after round 5
      
      //resetting the rounds and the scoreboard
      const resetBtn = document.querySelector("#reset");

      resetBtn.addEventListener("click", () => {
        window.location.reload();
      });
    }
  });
});

//Score board
const compResult = document.querySelector("#comp");
compResult.textContent = compScore;

const playerResult = document.querySelector("#player");
playerResult.textContent = playerScore;

//Round counter
const roundCounter = document.querySelector("#counter");
roundCounter.textContent = "Round " + round;

// play 5 rounds
// after 5 rounds evaluate the winner
// set counter
// when counter reaches 5 determine the winner
// display the winner
// reset the score
// reset the round counter
