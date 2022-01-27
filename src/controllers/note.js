const { Note } = require('../mongo')

const home = (req, res) => {
  res.status(200).send("Hello note")
}

const getAll = (req, res) => {
  Note.find({}, (err, docs) => {
    if (err) {
      res.status(500).send("Error: " + err)
    } else {
      res.status(200).send(docs)
    }
  })
}

const getOneID = (req, res) => {
  Note.findById(req.params.id, (err, docs) => {
    if (err) {
      res.status(500).send("Error: " + err)
    } else {
      res.status(200).send(docs)
    }
  })
}

module.exports = { home, getAll, getOneID }
