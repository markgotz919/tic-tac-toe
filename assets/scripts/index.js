'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

//equiv of $(document).ready() in jQuery
const playerOne = "X"
const playerTwo = "O"

$(() => {

  /*document.getElementsByClassName("cell").addEventListener("click", playGameFunction)

  function playGameFunction() {
    document.getElementById("boxZero").innerHTML = playerOne;
	}
	*/
  $("button").click(function () {
    //console.log("5")
    $('#boxZero').html("X")
  });



});
