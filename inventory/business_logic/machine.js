const Machine = require('../../database/machine.js')
const errors = require('../../tools/errors.js')
const _ = require('underscore')

module.exports = {

  search: function (req, res) {
    let search = req.query
    _.each(search, (v,k) => search[k] = new RegExp('.*'+v+'.*', 'i'))
    Machine.find(search, (err, machines) => {
      if (err) res.send({error: errors.search_error})
      res.send(machines)
    })
  },

}