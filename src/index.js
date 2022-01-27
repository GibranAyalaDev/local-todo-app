const express = require('express')
const morgan = require('morgan')
const { connect } = require('./mongo')

// create the app
const app = express()

// connect to the database
connect("mongodb://127.0.0.1:27017/todo")

// middlewares
app.use(morgan("dev"))

// routes
app.use("/user", require('./routes/user.router'))

// Start the server
app.listen(8000, () => {
  console.log("Server running on port 8000.")
})
