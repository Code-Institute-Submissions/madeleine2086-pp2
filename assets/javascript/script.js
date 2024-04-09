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