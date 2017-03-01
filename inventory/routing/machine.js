const Machine = require('../business_logic/machine.js')

module.exports = function (app) {
  app.get('/search', Machine.search)
}