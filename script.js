function getComputerChoice(){
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection){
  if(computerSelection.toUpperCase() == playerSelection.toUpperCase()){
    console.log("Tie!")
  }
  else if(computerSelection === "Rock" && playerSelection.toUpperCase() === "SCISSORS"){
    console.log("You Lose! Rock beats Scissors");
  }
  else if(computerSelection === "Rock" && playerSelection.toUpperCase() === "PAPER"){
    console.log("You Win! Paper beats Rock");
  }
  else if(computerSelection === "Paper" && playerSelection.toUpperCase() === "SCISSORS"){
    console.log("You Win! Scissors beats Paper");
  }
  else if(computerSelection === "Paper" && playerSelection.toUpperCase() === "ROCK"){
    console.log("You Lose! Paper beats Rock");
  }
  else if(computerSelection === "Scissors" && playerSelection.toUpperCase() === "PAPER"){
    console.log("You Lose! Scissors beats Paper");
  }
  else if(computerSelection === "Scissors" && playerSelection.toUpperCase() === "ROCK"){
    console.log("You Win! Rock beats Scissors");
  }
}