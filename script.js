function getComputerChoice(){
    let choices = ['rock', 'paper','scissors'];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

function singleRound(playerSelection, computerSelection){
    
    playerSelection = playerSelection.toLowerCase();
    

    if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')){
        return `You won! Computer played ${computerSelection}`;
    }
    else if(playerSelection === computerSelection){
        return `It's a draw! Computer played ${computerSelection}`;
    }
    else if(playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors'){
        return "Wrong word! Choose rock, paper or scissors";
    }
    else{
        return `You lose! Computer played ${computerSelection}`;
    }

}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i<5; i++){
        let playerSelection = prompt('Choose rock, paper or scissors');
        let computerSelection = getComputerChoice();
        let result = singleRound(playerSelection, computerSelection)
        console.log(result)
        if(result === `You won! Computer played ${computerSelection}`){
            playerScore++;
        }
        else if(result === `You lose! Computer played ${computerSelection}`){
            computerScore++;
        }
        console.log(`Current result: 
        Player:${playerScore}
        Computer: ${computerScore}`)
    }

    if( playerScore > computerScore){
        console.log('Well done! You won.')
    }else if (playerScore < computerScore){
        console.log('You lost :(')
    }else{
        console.log("It's a draw.")
    }
    
}

game();