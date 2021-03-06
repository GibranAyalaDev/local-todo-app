const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { connect } = require('./mongo')

// create the app
const app = express()

// connect to the database
connect("mongodb://127.0.0.1:27017/todo-test")

// middlewares
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use("/todo", require('./routes/todo'))
app.use("/note", require('./routes/note'))
app.use("/secret", require('./routes/secret'))

app.get('*', (req, res) => {
  res.status(404).send("404: Page not found.")
})

// Start the server
app.listen(8000, () => {
  console.log("Server running on port 8000.")
})
