function getComputerChoice(){
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection){
  playerSelection = playerSelection.toUpperCase();
  if(computerSelection.toUpperCase() == playerSelection){
    console.log("Tie!")
  }
  else if(computerSelection === "Rock" && playerSelection === "SCISSORS"){
    console.log("You Lose! Rock beats Scissors");
  }
  else if(computerSelection === "Rock" && playerSelection === "PAPER"){
    console.log("You Win! Paper beats Rock");
  }
  else if(computerSelection === "Paper" && playerSelection === "SCISSORS"){
    console.log("You Win! Scissors beats Paper");
  }
  else if(computerSelection === "Paper" && playerSelection === "ROCK"){
    console.log("You Lose! Paper beats Rock");
  }
  else if(computerSelection === "Scissors" && playerSelection === "PAPER"){
    console.log("You Lose! Scissors beats Paper");
  }
  else if(computerSelection === "Scissors" && playerSelection === "ROCK"){
    console.log("You Win! Rock beats Scissors");
  }
}