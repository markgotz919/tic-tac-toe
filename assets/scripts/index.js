'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

//equiv of $(document).ready() in jQuery
$(() => {
  const player = "X"

	//ONCE per page load only
	document.addEventListener("DOMContentLoaded", function () {
	  var boxes = document.querySelectorAll("main button");
	  for (let i = 0; i < boxes.length; i++) {
	    boxes[i].addEventListener("click", playerTurn);
	  }
	  document.querySelector("header button").addEventListener("click", newGame);
  })
  
  function playerTurn(){
    boxes.style.backgroundColor = "yellow"
  }
})
