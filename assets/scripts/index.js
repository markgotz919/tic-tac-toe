'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

//equiv of $(document).ready() in jQuery
const playerOne = "X"
const playerTwo = "O"

$(() => {



  $("#boxZero").click(function () {
    $('#boxZero').html("X")
  });
  $("#boxOne").click(function () {
    $('#boxOne').html("X")
  });
  $("#boxTwo").click(function () {
    $('#boxTwo').html("O")
  });


});
