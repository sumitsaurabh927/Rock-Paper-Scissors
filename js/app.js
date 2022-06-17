// console.log('wired');

// winner highlight wiring
let user = document.querySelector(".userInfo");
let computer = document.querySelector(".computerInfo");

// score handler wiring
let userPoint = document.querySelector(".userScore");
let computerPoint = document.querySelector(".computerScore");

// round update wiring
let infoStatus = document.querySelector(".infoStatus");
let infoRound = document.querySelector(".infoRound");

// choice update after each round
let userPicked = document.querySelector(".userChoice");
let compPicked = document.querySelector(".computerChoice");

// wiring buttons
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorBtn = document.querySelector("#scissor");

// variable to count number of rounds played
let count = 0;

// variables to track scores
let userScore = 0;
let compScore = 0;

// who won function for each round
const whoWon = (userPlay, computerSelection) => {
  // user's winning conditions
  if (
    (userPlay === "rock" && computerSelection === "scissors") ||
    (userPlay === "paper" && computerSelection === "rock") ||
    (userPlay === "scissors" && computerSelection === "paper")
  ) {
    console.log("User WINS!!!!");
    userScore += 10;
    userPoint.innerText = `Player: ${userScore}`;
    infoStatus.innerText = "Player Won ! ! !";
    console.log(userScore, compScore);
    infoRound.innerText = `Rounds remaining: ${4 - count}`;
    count++;
    return "user";
  } else if (userPlay === computerSelection) {
    //   draw conditions
    console.log("draw!");
    infoStatus.innerText = "Draw ! ! !";
    console.log(userScore, compScore);
    infoRound.innerText = `Rounds remaining: ${4 - count}`;
    count++;
    return "draw inside";
  } else {
    //   computer wins in all other cases
    console.log("computer wins");
    infoRound.innerText = `Rounds remaining: ${4 - count}`;
    count++;
    compScore += 10;
    computerPoint.innerText = `Computer: ${compScore}`;
    infoStatus.innerText = "Computer Won ! ! !";
    console.log(userScore, compScore);
    return "comp";
  }
};

let computerChoice = getComputerChoice();

async function getComputerChoice() {
  // fetching data from our api in server.js
   const compChoice = await fetch('/rps/play')
   const res = await compChoice.json()
   computerChoice=res.choice;
}

const playRound = (userChoice) => {
  // updating user choice on page
  if (userChoice === "rock") {
    userPicked.innerHTML = `&#9994; `;
  } else if (userChoice === "paper") {
    userPicked.innerHTML = `&#9995; `;
  } else if (userChoice === "scissors") {
    userPicked.innerHTML = ` &#9996; `;
  }

  console.log(`User's choice is: ${userChoice}`);

  // computer's selection function
  let choicesArr = ["rock", "paper", "scissors"];
  let computerChoice = choicesArr[Math.floor(Math.random() * 3)];

  // updating computer choice on page
  if (computerChoice === "rock") {
    compPicked.innerHTML = `&#9994; `;
  } else if (computerChoice === "paper") {
    compPicked.innerHTML = `&#9995; `;
  } else if (computerChoice === "scissors") {
    compPicked.innerHTML = ` &#9996; `;
  }

  console.log(`Comp's choice is ${computerChoice}`);

  // round result
  whoWon(userChoice, computerChoice);

  // comparing final scores
  if (count === 5) {
    if (userScore > compScore) {
      console.log("User Won THE ENTIRE GAME !!!");
      user.classList.add("winner");
      infoRound.innerText = "Result:";
      infoStatus.innerText = "PLAYER WON ! ! !";
    } else if (compScore > userScore) {
      console.log("Computer Won THE ENTIRE GAME !!!");
      infoRound.innerText = "Result:";
      computer.classList.add("winner");
      infoStatus.innerText = "Computer WON ! ! !";
    } else {
      console.log("THE ENTIRE GAME WAS draw!!!");
      infoRound.innerText = "Result:";
      user.classList.add("winner");
      computer.classList.add("winner");
      infoStatus.innerText = "DRAW ! ! !";
    }
  }
};

// making the game play on each button click
rockBtn.addEventListener("click", () => {
  if (count < 5) {
    getComputerChoice();
    playRound("rock");
  } else console.log("max played");
});
paperBtn.addEventListener("click", () => {
  if (count < 5) {
    getComputerChoice();
    playRound("paper");
  } else console.log("max played");
});
scissorBtn.addEventListener("click", () => {
  if (count < 5) {
    getComputerChoice();
    playRound("scissors");
  } else console.log("max played");
});

// to do
// 1. add a play again modal (reset scores to 0; replay ability w/o reload)
// 2. add responsiveness
