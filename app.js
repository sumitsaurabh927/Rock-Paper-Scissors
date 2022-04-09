// console.log('wired');

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
    console.log(userScore, compScore);
    count++;
    return "user";
  } else if (userPlay === computerSelection) {
    //   draw conditions
    console.log("draw!");
    console.log(userScore, compScore);
    count++;
    return "draw inside";
  } else {
    //   computer wins in all other cases
    console.log("computer wins");
    count++;
    compScore += 10;
    console.log(userScore, compScore);
    return "comp";
  }
};

const playRound = (userChoice) => {
  console.log(`User's choice is: ${userChoice}`);

  // computer's selection function
  let choicesArr = ["rock", "paper", "scissors"];
  let computerChoice = choicesArr[Math.floor(Math.random() * 3)];
  console.log(`Comp's choice is ${computerChoice}`);

  // round result
  whoWon(userChoice, computerChoice);

  // comparing final scores
  if (count === 5) {
    if (userScore > compScore) {
      console.log("User Won THE ENTIRE GAME!!!");
    } else if (compScore > userScore) {
      console.log("Computer Won THE ENTIRE GAME!!!");
    } else {
      console.log("THE ENTIRE GAME WAS draw!!!");
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
