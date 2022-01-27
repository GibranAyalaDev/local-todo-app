const express = require('express')
const morgan = require('morgan')
const { connect } = require('./mongo')

// create the app
const app = express()

// connect to the database
connect("mongodb://localhost:27017/todo")

// middlewares
app.use(morgan("dev"))

// routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World")
})

// Start the server
app.listen(8000, () => {
  console.log("Server running on port 8000.")
})
