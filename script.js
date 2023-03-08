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
    return "computer";
  }
  else if(computerSelection === "Rock" && playerSelection === "PAPER"){
    console.log("You Win! Paper beats Rock");
    return "player";
  }
  else if(computerSelection === "Paper" && playerSelection === "SCISSORS"){
    console.log("You Win! Scissors beats Paper");
    return "player";
  }
  else if(computerSelection === "Paper" && playerSelection === "ROCK"){
    console.log("You Lose! Paper beats Rock");
    return "computer";
  }
  else if(computerSelection === "Scissors" && playerSelection === "PAPER"){
    console.log("You Lose! Scissors beats Paper");
    return "computer";
  }
  else if(computerSelection === "Scissors" && playerSelection === "ROCK"){
    console.log("You Win! Rock beats Scissors");
    return "player";
  }
}

function game(){
  let computer, player = 0;
  for (let i = 0; index < 5; i++) {
    if(playRound() === "computer"){
      computer++;
    }
    else if (playRound === "player") {
      player ++;
    }
    else{
      computer++;
      player++;
    }
  }
  console.log(`you: ${player} computer: ${computer}`);
}