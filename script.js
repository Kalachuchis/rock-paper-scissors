
function computerPlay(){
  let randomNumber = Math.floor(Math.random()*3)
  
  switch(randomNumber){

    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors"
      break;
  }
}

function checkWinner(computer, player){
  if (computer == player){
    return "tie"
  } else if((computer == "rock" && player == "scissors") ||
            (computer == "paper" && player == "rock") ||
            (computer == "scissors" && player == "paper")){
              return "computer wins"
            } else {
              return "player wins"
            }

}

console.log("Type start() to play")
function start(){
  let playerPick = prompt("Rock, Paper, Scissors?");
  let computer = computerPlay();
  console.log(computer)
  console.log(checkWinner(computer, playerPick.toLowerCase()))
} 