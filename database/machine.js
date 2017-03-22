const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Machine = new Schema({
  name: String,
  serial_number: String,
  model: String,
  user: String,
  machine_drive: String,
  location: String,
  change: Array
})

module.exports = mongoose.model('Machine', Machine, 'Machine')
