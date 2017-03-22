const Machine = require('../../database/machine.js')
const errors = require('../../tools/errors.js')
const _ = require('underscore')
const moment = require('moment')

module.exports = {

  search: function (req, res) {
    let search = {}
    if (req.query.search) search[req.query.what] = new RegExp('.*'+req.query.search+'.*', 'i')
    Machine.find(search, (err, machines) => {
      if (err) res.send({error: errors.search_error})
      res.render("home", {machines})
    })
  },

  create_new: function (req, res) {
    let machine = new Machine(req.body)
    let last_changed = moment().format("MMM Do YY")
    machine.change = [["default_user","Added",last_changed]]
    machine.save((err) => {
      if (err) res.send({error: true})
      else res.redirect('/')
    })
  },

  edit: function (req, res) {
    let last_changed = moment().format("MMM Do YY")
    Machine.update(
      {_id: req.body._id},
      {
        name: req.body.name,
        serial_number: req.body.serial_number,
        model: req.body.model,
        user: req.body.user,
        machine_drive: req.body.machine_drive,
        location: req.body.location,
      },
      {$push: {'change': {$each: [["default_user", req.body.change, last_changed]], $position: 0}}},
      (err) => {
        if (err) console.log(err)
        else res.redirect('/')
      }
    )
  }

}
