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
    if (err) {
      res.status(500).send("Error: " + err)
    } else {
      res.status(200).send("Document created")
    }
  })
}

const del = (req, res) => {
  const id = req.body.id

  Note.deleteOne({_id:id}, (err, _) => {
    if (err) {
      res.status(500).send("Error deleting note: " + err)
    } else {
      res.status(200).send("Document deleted")
    }
  })
}

const edit = (req, res) => {
  const id = req.params.id
  const doc = req.body

  Note.updateOne({_id: id}, doc, (err, _) => {
    if (err) {
      res.status(500).send("Error editing document: " + err)
    } else {
      res.status(200).send(doc)
    }
  })
}

module.exports = { home, getAll, getOneID, create, del, edit }
