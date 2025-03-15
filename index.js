let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"]
  const computerChoice = Math.floor(Math.random() * 3);
  return options[computerChoice];
}

function playRound(humanChoice, computerChoice) {
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
      return `You win! ${humanChoice} beats ${computerChoice}`;
    }
  }
}

const btn = document.querySelectorAll("button");
const btnArr = Array.from(btn)
const resultDisplay = document.querySelector(".result");
resultDisplay.textContent = `Score - Player: ${humanScore} | Computer: ${computerScore}`;

btnArr.forEach(btn => {
  btn.addEventListener("click", () => {
    const humanSelection = btn.textContent;
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    resultDisplay.textContent = `Score - Player: ${humanScore} | Computer: ${computerScore}`;

    const award = document.createElement("div");
    award.classList.add("award");
    document.querySelector("body").appendChild(award);

    if (humanScore === 5 || computerScore === 5) {
      if (humanScore > computerScore) {
        award.textContent = "Congratulations! You win the game!";
      } else if (humanScore < computerScore) {
        award.textContent = "Computer wins! Better luck next time.";
      } else {
        award.textContent = "It's a tie game!";
      }
      buttons.forEach(button => button.disabled = true);
    }
  })
})

