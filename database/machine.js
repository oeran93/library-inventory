const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Machine = new Schema({
  name: String,
  serial_number: String,
  model: String,
  user: String,
  machine_drive: String,
  location: String,
  last_changed_by: [String],
  last_changed: [Date],
  change_description: [String]
})

module.exports = mongoose.model('Machine', Machine, 'Machine')
