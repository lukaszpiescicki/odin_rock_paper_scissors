function getComputerChoice(){
    let choices = ['rock', 'paper','scissors'];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

function singleRound(playerSelection, computerSelection){
    
    playerSelection = playerSelection.toLowerCase();
    

    if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')){
        console.log('You won!');
    }
    else if(playerSelection === computerSelection){
        console.log("It's a draw!");
    }else{
        console.log("You lose!");
    }

}

let playerSelection = prompt('Choose rock, paper or scissors')
singleRound(playerSelection, getComputerChoice())