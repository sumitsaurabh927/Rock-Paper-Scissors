// console.log('wired');

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
    infoStatus.innerText = "Player Won!!!";
    console.log(userScore, compScore);
    infoRound.innerText = `Rounds remaining: ${4 - count}`;
    count++;
    return "user";
  } else if (userPlay === computerSelection) {
    //   draw conditions
    console.log("draw!");
    infoStatus.innerText = "Draw!!!";
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
    infoStatus.innerText = "Computer Won!!!";
    console.log(userScore, compScore);
    return "comp";
  }
};

const playRound = (userChoice) => {
  // updating user choice on page
  if (userChoice === "rock") {
    userPicked.innerHTML = `Player picked:&#9994; `;
  } else if (userChoice === "paper") {
    userPicked.innerHTML = `Player picked:&#9995; `;
  } else if (userChoice === "scissors") {
    userPicked.innerHTML = `Player picked: &#9996; `;
  }

  console.log(`User's choice is: ${userChoice}`);

  // computer's selection function
  let choicesArr = ["rock", "paper", "scissors"];
  let computerChoice = choicesArr[Math.floor(Math.random() * 3)];

  // updating computer choice on page
  if (computerChoice === "rock") {
    compPicked.innerHTML = `Computer picked:&#9994; `;
  } else if (computerChoice === "paper") {
    compPicked.innerHTML = `Computer picked:&#9995; `;
  } else if (computerChoice === "scissors") {
    compPicked.innerHTML = `Computer picked: &#9996; `;
  }

  console.log(`Comp's choice is ${computerChoice}`);

  // round result
  whoWon(userChoice, computerChoice);

  // comparing final scores
  if (count === 5) {
    if (userScore > compScore) {
      console.log("User Won THE ENTIRE GAME!!!");
      infoRound.innerText = "PLAYER Won THE ENTIRE GAME!!!";
    } else if (compScore > userScore) {
      console.log("Computer Won THE ENTIRE GAME!!!");
      infoRound.innerText = "Computer Won THE ENTIRE GAME!!!";
    } else {
      console.log("THE ENTIRE GAME WAS draw!!!");
      infoRound.innerText = "THE ENTIRE GAME WAS draw!!!";
    }
  }
};

// making the game play on each button click
rockBtn.addEventListener("click", () => {
  if (count < 5) {
    playRound("rock");
  } else console.log("max played");
});
paperBtn.addEventListener("click", () => {
  if (count < 5) {
    playRound("paper");
  } else console.log("max played");
});
scissorBtn.addEventListener("click", () => {
  if (count < 5) {
    playRound("scissors");
  } else console.log("max played");
});
