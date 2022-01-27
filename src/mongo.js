const mongoose = require('mongoose')

const connect = (url) => {
  console.log("Created database conenction for " + url)
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
}

const Todo = mongoose.model("Todo", {
  name: String,
  description: String,
  creation_date: Date,
  due_date: Date,
})

const Secret = mongoose.model("Secret", {
  note: String,
  content: String,
})

module.exports = { connect, Todo, Secret }
