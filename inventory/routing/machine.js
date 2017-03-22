const Machine = require('../business_logic/machine.js')

module.exports = function (app) {
  app.get('/', Machine.search)
  app.post('/new_machine', Machine.create_new)
  app.post('/edit', Machine.edit)
}
