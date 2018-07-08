const updateSuccess = function () {
  $('#message').text('game has been updated')
  $('#message').css('background-color', 'green')
  console.log('updateSuccess ran and nothing was returned!')
}

const updateFailure = function (error) {
  $('#message').text('Error on update')
  $('#message').css('background-color', 'red')
  console.error('updateFailure ran. Error is :', error)
}

module.exports = {
  updateSuccess,
  updateFailure
  
}