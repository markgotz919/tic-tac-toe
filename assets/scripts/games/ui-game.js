const updateSuccess = function () {
  $('#message').text('game has been updated')
  $('#message').css('background-color', 'green')
  
}

const updateFailure = function (error) {
  $('#message').text('Error on update')
  $('#message').css('background-color', 'red')
  
}

module.exports = {
  updateSuccess,
  updateFailure
  
}