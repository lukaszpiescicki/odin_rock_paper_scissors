const buttons = document.querySelectorAll('.button')
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

const results = document.querySelector('#results');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const output = document.querySelector('#output');

let playerChoice;
let computerChoice

let roundState = 0;

let playerScore = 0;
let computerScore = 0;

player.textContent = `Player's score: ${playerScore}`;
computer.textContent = `Computer's score: ${computerScore}`; 

buttons.forEach((button) => {button.addEventListener('click',() => {
    playerChoice = button.id;
    computerChoice = getComputerChoice();
    game();
})})

function getComputerChoice(){
    let choices = ['rock', 'paper','scissors'];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

function singleRound(){
    if ((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'scissors' && computerChoice === 'paper')){
        playerScore++;
        output.textContent = 'You won';
    }
    else if(playerChoice === computerChoice){
        output.textContent = 'Draw';
    }
    else{
        computerScore++;
        output.textContent = 'You lose';
    }
}

function resetResult(){
    playerScore = 0;
    computerScore = 0;
    player.textContent = `Player's score: ${playerScore}`;
    computer.textContent = `Computer's score: ${computerScore}`;  
}

function game(){
    singleRound();
        if(playerScore === 5){
        output.textContent = 'Game over! You won';
        resetResult();
        }
        else if(computerScore === 5 ){
            output.textContent = 'Game over! You lost';
            resetResult();
        }
    player.textContent = `Player's score: ${playerScore}`;
    computer.textContent = `Computer's score: ${computerScore}`; 
}



