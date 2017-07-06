const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Machine = new Schema({
  name: String,
  serial_number: {type: String, required: true, unique: true},
  model: String,
  user: String,
  machine_drive: String,
  location: String,
  change: Array
})

module.exports = mongoose.model('Machine', Machine, 'Machine')
