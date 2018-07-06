const config = require("../config")
const store = require("../store")

const create = function (data) {
  console.log("object created")
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })

}

module.exports = {
  create

}
