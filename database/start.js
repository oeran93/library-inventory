const mongoose = require('mongoose')
const env = process.env

module.exports = function () {
  const auth = `mongodb://localhost/${env.LI_DB_NAME}`

  mongoose.connect(auth,
    {user:env.LI_DB_USERNAME, pass:env.LI_DB_PASSWORD},
    (err, res) => {
      if (err) {
        console.log(err.message);
      }
    }
  )
}
