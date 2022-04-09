// console.log('wired');

// wiring buttons
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorBtn = document.querySelector("#scissor");

// variable to count number of rounds played
let count = 0;

// who won function for each round
const whoWon = (userPlay, computerSelection) => {
  // user's winning conditions
  if (
    (userPlay === "rock" && computerSelection === "scissors") ||
    (userPlay === "paper" && computerSelection === "rock") ||
    (userPlay === "scissors" && computerSelection === "paper")
  ) {
    console.log("User WINS!!!!");
    console.log(`Prv value of count: ${count}`);
    count++;
    console.log(`Update value of count: ${count}`);
    return "user";
  } else if (userPlay === computerSelection) {
    //   draw conditions
    console.log("draw!");
    console.log(`Prv value of count: ${count}`);
    count++;
    console.log(`Update value of count: ${count}`);
    return "draw inside";
  } else {
    //   computer wins in all other cases
    console.log("computer wins");
    console.log(`Prv value of count: ${count}`);
    count++;
    console.log(`Update value of count: ${count}`);
    return "comp";
  }
};

// const playGame = (userChoice) => {
//   let userScore = 0;
//   let compScore = 0;

//   // playing 5 times
//   // for (let i = 0; i < 5; i++) {
//   // let userChoice = prompt("Enter your choice").toLowerCase();
//   console.log("user choice is: ", userChoice);

//   let computerChoice = computerPlay();
//   console.log("compueter choice is: ", computerChoice);

//   if (whoWon(userChoice, computerChoice) === "user") {
//     userScore += 10;
//   } else if (whoWon(userChoice, computerChoice) === "comp") {
//     compScore += 10;
//   }
//   console.log("userScore = ", userScore, "pc score: ", compScore);
//   // }

//   //   comparing final scores
//   // if (userScore > compScore) {
//   //   console.log("User Won!!!");
//   // } else if (compScore > userScore) {
//   //   console.log("Computer Won!!!");
//   // } else {
//   //   console.log("draw!!!");
//   // }
//   // }
// };

// playGame();

// making game play on button click
// let computerChoice = computerPlay();

const playRound = (userChoice) => {
  console.log(`User's choice is: ${userChoice}`);

  // computer's selection function
  let choicesArr = ["rock", "paper", "scissors"];

  // const computerPlay = () => {
  //   console.log(choicesArr[Math.floor(Math.random() * 3)]);
  //   return choicesArr[Math.floor(Math.random() * 3)];
  // };
  let computerChoice = choicesArr[Math.floor(Math.random() * 3)];
  console.log(`Comp's choice is ${computerChoice}`);

  // round result
  whoWon(userChoice, computerChoice);
};

// making the game play on each button click
rockBtn.addEventListener("click", () => {
  if(count<6){
    playRound("rock");
  }else console.log('max played')
});
paperBtn.addEventListener("click", () => {
  if(count<6){
    playRound("paper");
  }else console.log('max played')
});
scissorBtn.addEventListener("click", () => {

  if(count<6){
    playRound("scissors");
  }else console.log('max played')
});
