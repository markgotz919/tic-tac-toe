'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const store = require('./store')

const gameApi = require("./games/api-game")

const ui = require('./games/ui-game')

const authEvents = require('./auth/events.js')
$(() => {
  authEvents.addHandlers()

})

var player = "X",
  gameOver = false,
  xWins = 0,
  oWins = 0,
  numTies = 0,
  numMoves = 0;



//ONCE per page load only
document.addEventListener("DOMContentLoaded", function () {
  //equiv of $(document).ready() in jQuery
  // document.querySelectorAll (always return list)
  var boxes = document.querySelectorAll("main button");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", playerTurn);

  }
  document.querySelector("#new-game").addEventListener("click", newGame);
  document.querySelector("#get-games").addEventListener("click", getGames);
});

function newGame() {
  //runs when the New Game button is clicked
  //remove all Xs and Os from the board
  var boxes = document.querySelectorAll("main button");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].textContent = "";

  }
  $('main').addClass("ready");
  //add the function to create game object
  gameApi.create()
    .then(function (response) {
     
      store.game = response.game
    })
    .then(function () {
      
    })
    .catch(function (error) {
      
    })


  //set number of moves to 0
  numMoves = 0;
  //set starting player to X
  player = "X";
  //game on
  gameOver = false;
}

function message(text = "") {
  var h2 = document.querySelector("h2");
  h2.textContent = text;
  setTimeout(message, 5000);

}

function displayScore() {
  var h3 = document.querySelector("h3");
  h3.textContent = "X wins: " + xWins + "      ----            O wins: " + oWins + "      ----            Number of ties: " + numTies

}

function playerTurn(e) {
  var classArray = ["top left", "top center", "top right", "middle left", "middle center", "middle right", "bottom left", "bottom center", "bottom right"];
  
  //e is the event object
  //e.target is the button just clicked on
  //make sure button hasn't already been used this game
  if (gameOver || e.target.textContent.length) {
    message("illegal move");
    return;
  }
  var index = classArray.indexOf(e.target.className);
  //insert the player ("X" or "O") into the button
  e.target.textContent = player;
  //check for a win or tie condition
  if (winner()) {
    //we have a winner, prevent new clicks on the buttons
    gameOver = true;
    message(player + " wins!");
    if (player === "X") {
      xWins++;
    } else {
      oWins++;
    }
    displayScore();
    saveGameState(index, player, gameOver);
    return;
  }
  //game still going? switch players
  numMoves++;
  if (numMoves === 9) {
    gameOver = true;
    message("It's a Tie!");
    numTies++;
    displayScore();

    saveGameState(index, player, gameOver);
    return;
  }
  saveGameState(index, player, gameOver);
  changePlayers();
}

function saveGameState(index, player, gameOver) {
  //build turn object
  var data = {
    "game": {
      "cell": {
        "index": index,
        "value": player
      },
      "over": gameOver
    }
  };
  //patch to database
  gameApi.update(data)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure);


}

function changePlayers() {
  if (player === "X") player = "O";
  else player = "X";
}

function winner() {
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

function getGames() {
  gameApi.getGames().then(function (data) {
    var allScores = document.querySelector("#allScores");
    var html = "<ol>";
    for (let i = 0; i < data.games.length; i++) {
      html += "<li>" + JSON.stringify(data.games[i]) + "</li>";
    }
    html += "</ol>";
    allScores.innerHTML = html;
  })


}
