// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// your JS code goes here 
let origBoard = []
const player1 = "O"
const player2 = "X"

const cells = document.querySelectorAll('.cell')
startGame();

function startGame() {
  document.querySelector(".endgame").style.display = "none"
  origBoard = Array.from(Array(9).keys())
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = ""
    cells[i].addEventListener('click', turnClick, false)
  }
}

function turnClick(square) {
  turn(square.target.id, player1)

}

function turn(squareID, player1) {
  origBoard[squareID = player1 document.getElementById(elementId).innerText = player1
  }
