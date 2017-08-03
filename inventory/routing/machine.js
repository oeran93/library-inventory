const Machine = require('../business_logic/machine.js')

module.exports = function (app) {
  app.get('/', is_logged_in, Machine.search)
  app.post('/new_machine', is_logged_in, Machine.create_new)
  app.post('/edit_machine', is_logged_in, Machine.edit)
  app.post('/delete_machine', is_logged_in, Machine.delete)
  app.get('/logout', (req,res) => {req.session.user = null; res.redirect('/login')})
}

function is_logged_in(req, res, next) {
  if (req.session.user) next()
  else res.redirect('/login')
}
