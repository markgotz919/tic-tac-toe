'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')


//global variable
var player = "X",
    gameOver = false,
    xWins = 0,
    oWins = 0;

    

//ONCE per page load only
document.addEventListener("DOMContentLoaded", function(){
  	//equiv of $(document).ready() in jQuery
    // document.querySelectorAll (always return list)
    var boxes = document.querySelectorAll("main button");
    for (let i=0; i<boxes.length; i++){
        boxes[i].addEventListener("click", playerTurn);
    }
  	document.querySelector("header button").addEventListener("click", newGame);
});

function newGame(){
	//runs when the New Game button is clicked
  	//remove all Xs and Os from the board
  	var boxes = document.querySelectorAll("main button");
    for (let i=0; i<boxes.length; i++){
        boxes[i].textContent = "";
    }
  	//set starting player to X
  	player = "X";
  	//game on
  	gameOver = false;
}
function message(text=""){
  var h2 = document.querySelector("h2");
  h2.textContent = text;
  setTimeout(message, 5000);
  
}
      
 function displayScore(){
   var h3 = document.querySelector("h3");
   h3.textContent = "X wins: " + xWins + " O wins: "+oWins;
   
 }

function playerTurn(e){
    console.log(e);
  	//e is the event object
  	//e.target is the button just clicked on
  	//make sure button hasn't already been used this game
  	if (gameOver || e.target.textContent.length){
      message("illegal move");
      return;
    }
  
	//insert the player ("X" or "O") into the button
  	e.target.textContent = player;  
  	//check for a win or tie condition
  	if (winner()){
    	//we have a winner, prevent new clicks on the buttons
      	gameOver = true;
      	message(player + " wins!");
        if (player === "X"){
          xWins++;
        } else {
          oWins++;
        }
      displayScore();
      	return;
    }
  	//game still going? switch players
  	changePlayers();
}

function changePlayers(){
	if (player === "X") player = "O";
  	else player = "X";
}

function winner(){
	//return true if there's a winner or false if there isn't
  	//get all the buttons
  	var boxes = document.querySelectorAll("main button");
  	//top row
  	if (boxes[0].textContent.length && boxes[0].textContent === boxes[1].textContent && boxes[1].textContent === boxes[2].textContent) return true;
  	//middle row
  	if (boxes[3].textContent.length && boxes[3].textContent === boxes[4].textContent && boxes[4].textContent === boxes[5].textContent) return true;
  	//bottom row
  	if (boxes[6].textContent.length && boxes[6].textContent === boxes[7].textContent && boxes[7].textContent === boxes[8].textContent) return true;
  	//left column
  	if (boxes[0].textContent.length && boxes[0].textContent === boxes[3].textContent && boxes[3].textContent === boxes[6].textContent) return true;
  	//center column
  	if (boxes[1].textContent.length && boxes[1].textContent === boxes[4].textContent && boxes[4].textContent === boxes[7].textContent) return true;
  	//right column
  	if (boxes[2].textContent.length && boxes[2].textContent === boxes[5].textContent && boxes[5].textContent === boxes[8].textContent) return true;
  	//nw-se diag
  	if (boxes[0].textContent.length && boxes[0].textContent === boxes[4].textContent && boxes[4].textContent === boxes[8].textContent) return true;
  	//ne-sw diag
  	if (boxes[2].textContent.length && boxes[2].textContent === boxes[4].textContent && boxes[4].textContent === boxes[6].textContent) return true;
  	//no winner
  	return false;
}
		

