const db        = require('../../../database/start.js')
const Machine = require('../../../database/machine.js')
const app       = require('../../app.js')(db)
const supertest = require('supertest')
const should = require('should')
const errors = require('../../../tools/errors.js')

describe('machine logic', function () {

  it('searches successfully by name', done => {
    supertest(app)
    .get('/search')
    .query('name=machine1')
    .end((err, res) => {
      res.body.forEach((m) => {m.name.should.equal('machine1')})
      done()
    })
  })

  it('searches successfully by model', done => {
    supertest(app)
    .get('/search')
    .query('model=test_model')
    .end((err, res) => {
      res.body.forEach((m) => {m.model.should.equal('test_model')})
      done()
    })
  })

  it('searches successfully by serial number', done => {
    supertest(app)
    .get('/search')
    .query('serial_number=2315')
    .end((err, res) => {
      res.body.forEach((m) => {m.serial_number.should.equal('23142312')})
      done()
    })
  })

})