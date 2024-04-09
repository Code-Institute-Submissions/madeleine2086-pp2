/* Declared variables */
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userScoreDisplay = document.getElementById('player-score');
let computerScoreDisplay = document.getElementById('computer-score');
let userChoice
let computerChoice
let userScore = 0;
let computerScore = 0;
let result

/* Game logic - use of function in correct order */
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
  }))

/* Function to generate comupter choice */
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber === 1) {
      computerChoice = "rock"
    }
    if (randomNumber === 2) {
      computerChoice = "scissors"
    }
    if (randomNumber === 3) {
      computerChoice = "paper"
    }
    computerChoiceDisplay.innerHTML = computerChoice
  }

/* Function to compare user and computer's choices and decide on the result and update the score */
function getResult() {
    if (computerChoice === userChoice) {
      result = "It's a Draw!"
    }
    if (computerChoice === "rock" && userChoice === "paper") {
      result = "You Win!"
      userScore++;
      userScoreDisplay.textContent = userScore;
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
      result = "You Lose!"
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
      result = "You Win!"
      userScore++;
      userScoreDisplay.textContent = userScore;
    }
    if (computerChoice === "paper" && userChoice === "rock") {
      result = "You Lose!"
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
    }
    if (computerChoice === "scissors" && userChoice === "rock") {
      result = "You Win!"
      userScore++;
      userScoreDisplay.textContent = userScore;
    }
    if (computerChoice === "scissors" && userChoice === "paper") {
      result = "You Lose!"
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
    }
    resultDisplay.innerHTML = result
  }