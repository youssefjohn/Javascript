const choicesList = ['rock', 'paper', 'scissors']

function getComputerChoice(list){
    let index = Math.floor(Math.random() * list.length);
    return list[index];
}

function getPlayerChoice(){
    let choice = prompt("Players choice - Rock, Paper or Scissors? ").toLowerCase();
    return choice;
}

function playRound(computerChoice, playerChoice){
    let computer = computerChoice(choicesList);
    let player = playerChoice();

    if (computer === 'rock' && player === 'scissors'){
        computerScore++
        return `You lose! ${computer} beats ${player}`;
    } else if (player === 'rock' && computer === 'scissors'){
        playerScore++
        return `You win! ${player} beats ${computer}`;
    } else if (computer === 'paper' && player === 'rock'){
        computerScore++
        return `You lose! ${computer} beats ${player}`;
    } else if (player === 'paper' && computer === 'rock'){
        playerScore++
        return `You win! ${player} beats ${computer}`;
    } else if (computer === 'scissors' && player === 'paper'){
        computerScore++
        return `You lose! ${computer} beats ${player}`;
    } else if (computer === 'paper' && player === 'scissors'){
        playerScore++
        return `You win! ${player} beats ${computer}`;
    } else {return 'Draw!'}}

function game(){
    let result = playRound(getComputerChoice, getPlayerChoice)
    console.log(result)
    
}

let playerScore = 0
let computerScore = 0
while (playerScore !== 5 && computerScore !== 5){
    console.log(playerScore)
    console.log(computerScore)
    game()
}

if (playerScore > computerScore){
    console.log(`You were the first to 5! You Win!!!`)
} else{
    console.log("The computer was the first to 5, you lost!")
}

console.log(`Final Score: Computer ${computerScore}, Player ${playerScore}`)
