const mongoose = require('mongoose')

const connect = (url) => {
  console.log("Created database conenction for " + url)
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = { connect }
