let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"]
  const computerChoice = Math.floor(Math.random());
  return options[computerChoice];
}

function getHumanChoice() {
  const humanChoice = prompt("Your choice:");
  return humanChoice
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    console.log(humanChoice)
    console.log(computerChoice)
    if (humanChoice === computerChoice) {
      return "Draw";
    } else {
      if (humanChoice === "Scissors" && computerChoice === "Rock"
        || humanChoice === "Rock" && computerChoice === "Paper"
        || humanChoice === "Paper" && computerChoice === "Scissors"
      ) {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
      } else {
        humanScore++;
        return `You lose! ${humanChoice} beats ${computerChoice}`;
      }
    }
  }
  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
    console.log(`Score - Player: ${humanScore} | Computer: ${computerScore}`);
  }


  if (humanScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (humanScore < computerScore) {
    console.log("Computer wins! Better luck next time.");
  } else {
    console.log("It's a tie game!");
  }
}

playGame();
