'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

//equiv of $(document).ready() in jQuery
const playerOne = "X"
const playerTwo = "O"

$(() => {

  function click() {
    if (this.id == "boxZero") {
      document.getElementById("boxZero").innerHTML = "X";
    } else if (this.id == "boxOne") {
      document.getElementById("boxOne").innerHTML = "X";
    } else if (this.id == "boxTwo") {
      document.getElementById("boxTwo").innerHTML = "X";

    } else if (this.id == "boxThree") {
      document.getElementById("boxThree").innerHTML = "X";
    } else if (this.id == "boxFour") {
      document.getElementById("boxFour").innerHTML = "X";
    } else if (this.id == "boxFive") {
      document.getElementById("boxFive").innerHTML = "X";

    } else if (this.id == "boxSix") {
      document.getElementById("boxSix").innerHTML = "X";
    } else if (this.id == "boxSeven") {
      document.getElementById("boxSeven").innerHTML = "X";
    } else if (this.id == "boxEight") {
      document.getElementById("boxEight").innerHTML = "X";
    }
  }
  document.getElementById("boxZero").onclick = click;
  document.getElementById("boxOne").onclick = click;
  document.getElementById("boxTwo").onclick = click;
  document.getElementById("boxThree").onclick = click;
  document.getElementById("boxFour").onclick = click;
  document.getElementById("boxFive").onclick = click;
  document.getElementById("boxSix").onclick = click;
  document.getElementById("boxSeven").onclick = click;
  document.getElementById("boxEight").onclick = click;

});
