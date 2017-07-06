const AD = require('./active_directory.js')()

module.exports = function (app) {
  app.post('/login', AD.login)
  app.get('/login', AD.login_page)
}
