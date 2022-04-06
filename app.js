// console.log('wired');

let choicesArr = ["rock", "paper", "scissors"];

// computer's selection function
const computerPlay = () => {
  console.log(choicesArr[Math.floor(Math.random() * 3)]);
  return choicesArr[Math.floor(Math.random() * 3)];
};

// who won function for each round
const whoWon = (userPlay, computerSelection) => {
  // user's winning conditions
  if (
    (userPlay === "rock" && computerSelection === "scissors") ||
    (userPlay === "paper" && computerSelection === "rock") ||
    (userPlay === "scissors" && computerSelection === "paper")
  ) {
    // console.log("User WINS!!!!");
    return "user";
  } else if (userPlay === computerSelection) {
    //   draw conditions
    // console.log("draw!");
    return "draw inside";
  } else {
    //   computer wins in all other cases
    // console.log("computer wins");
    return "comp";
  }
};

const playGame = () => {
  let userScore = 0;
  let compScore = 0;

//   playing 5 times
  for (let i = 0; i < 5; i++) {
    let userChoice = prompt("Enter your choice").toLowerCase();
    console.log("user choice is: ", userChoice);

    let computerChoice = computerPlay();
    console.log("compueter choice is: ", computerChoice);

    if (whoWon(userChoice, computerChoice) === "user") {
      userScore += 10;
    } else if (whoWon(userChoice, computerChoice) === "comp") {
      compScore += 10;
    }
    console.log("userScore = ", userScore, "pc score: ", compScore);
  }

  //   comparing final scores
  if (userScore > compScore) {
    console.log("User Won!!!");
  } else if (compScore > userScore) {
    console.log("Computer Won!!!");
  } else {
    console.log("draw!!!");
  }
};

playGame();
