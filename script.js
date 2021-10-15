const roundResults = document.querySelector(".roundResults p")
const yourScore = document.querySelector("#topLeft")
const theComputerScore = document.querySelector("#topRight")
const possibleChoices = document.querySelectorAll('button')

let pScore = 0;
let cScore = 0;
let myValues = ["Rock", "Paper", "Scissors"];

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
  playerSelection = e.target.id
  playRound(playerSelection, computerPlay());
}))
console.log()
//Translates random numbers to values

function computerPlay() {
  let randomChoice = Math.floor(Math.random() * myValues.length)

  if (randomChoice == 0) {
    computerSelection = "Rock";
  }
  else if (randomChoice == 1) {
    computerSelection = "Paper";
  }
  else {
    computerSelection = "Scissors";
  };
};

const updateScore = () => {
  const playerScore = document.querySelector(".computer-score p")
  const computerScore = document.querySelector(".player-score p")
  playerScore.textContent = pScore;
  computerScore.textContent = cScore;
};;

//plays a single round

const playRound = (playerSelection) => {
  
    
  if (pScore == 5) {
  disableButtons()  
  roundResults.textContent = "Yaay You Won The Game, Refresh To Start Over!!!";
  return;  
}
  if (cScore == 5) {
    disableButtons()
    roundResults.textContent = "Darn You Lost The Game, Refresh To Start Over!!!";
    return;
  }

  if (playerSelection === computerSelection) {
   roundResults.textContent = "You tied that round";
    return;
    
  }

  if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      roundResults.textContent = "You Won That Round!!!";
      pScore++;
      updateScore();
      return;
    } else {
      roundResults.textContent = "OooF Computer Wins That Round";
      cScore++;
      updateScore();
      return;
    }
  }

  if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      roundResults.textContent = "Ouch You lost";
      cScore++;
      updateScore();
      return;
    } else {
      roundResults.textContent = "Yeah Buddy!!!";
      pScore++;
      updateScore();
      return;
    }
  }

  if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      roundResults.textContent = "Daarn Computer Takes This One";
      cScore++;
      updateScore();;
      return;
    } else {
      roundResults.textContent = "You/'re On Fire";
      pScore++;
      updateScore();
      return;
    }
  }
};

function disableButtons() {
      possibleChoices.forEach(elem => {
        elem.disabled = true
    })
  
};
