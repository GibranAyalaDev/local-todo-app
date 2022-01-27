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

const create = (req, res) => {
  const title = req.body.title
  const note = req.body.note

  Note.create({ title, note }, (err, docs) => {
    if(err) {
      res.status(500).send("Error: " + err)
    } else {
      res.status(200).send("Document created")
    }
  })
}

module.exports = { home, getAll, getOneID, create }
