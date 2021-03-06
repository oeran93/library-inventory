const express     = require('express')
const app         = express()
const session = require('client-sessions')
const body_parser = require('body-parser')
const env         = process.env
var exphbs  = require('express-handlebars')

const router = require('./routing/machine.js')
const access_router = require('../access/routing.js')

module.exports = function (db) {
  db()
  app.use(body_parser.json())
  app.use(body_parser.urlencoded({extended: true}))
  app.engine('.hbs', exphbs({
    extname:'.hbs',
    defaultLayout:'layout.hbs',
    layoutsDir: __dirname+ '/views'
  }))
  app.use(session(
    {
      cookieName: 'session',
      secret: "wdssdfsafasdfsdf",
      duration: 60 * 1000,
      activeDuration: 60 * 1000
    }
  ))
  app.set('view engine', '.hbs')
  app.set('views', __dirname+ '/views')
  app.use(express.static(__dirname + '/views'))
  router(app)
  access_router(app)
  app.use((req,res) => {res.redirect('/login')})
  return app
}
