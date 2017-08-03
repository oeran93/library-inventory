require('../database/start.js')()
const Machine = require('../database/machine.js')
machines = {}
fs = require('fs')
fs.readdir('./machines/', (err, files) => {
  files.forEach((file, i) => {
    fs.readFile('./machines/'+file, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      machine = data.split(/\r?\n/);
      mac = new Machine({
        name: machine[0],
        serial_number: machine[3].split(' ')[0],
        model: machine[3].split(' ').slice(1).join(' '),
        user: machine[4],
        location: machine[5],
        machine_drive: machine[6].split(' ').slice(1).join(' ')
      })
      if (machines[machine[3].split(' ')[0]]) console.log(machine[0])
      else machines[machine[3].split(' ')[0]] = machine[0]
      mac.save((err, m) => {})
    })
  })
})
