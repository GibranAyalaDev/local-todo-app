const { Note } = require('../mongo')

const home = (req, res) => {
  res.status(200).send({
    status: true,
    msg: "Hello Not",
    doc: null,
  })
}

const getAll = (req, res) => {
  Note.find({}, (err, docs) => {
    if (err) {
      res.status(500).send({
        status: false,
        msg:"Error: " + err,
        doc: null,
      })
    } else {
      res.status(200).send({
        status: true,
        msg: "Succeed",
        doc: docs
      })
    }
  })
}

const getOneID = (req, res) => {
  Note.findById(req.params.id, (err, docs) => {
    if (err) {
      res.status(500).send({
        status: false,
        msg: "Error: " + err,
        doc: null
      })
    } else {
      res.status(200).send({
        status: true,
        msg: "Succeed",
        doc:docs
      })
    }
  })
}

const create = (req, res) => {
  const title = req.body.title
  const note = req.body.note

  Note.create({ title, note }, (err, docs) => {
    if (err) {
      res.status(500).send({
        status: false,
        msg: "Error: " + err,
        doc: null
      })
    } else {
      res.status(200).send({
        status: true,
        msg:"Succeed",
        doc: { title, note }
      })
    }
  })
}

const del = (req, res) => {
  const id = req.body.id

  Note.deleteOne({_id:id}, (err, docs) => {
    if (err) {
      res.status(500).send({
        status: false,
        msg: "Error deleting note: " + err,
        doc: null
      })
    } else {
      res.status(200).send({
        status: true,
        msg:"Succeed",
        doc: docs,
      })
    }
  })
}

const edit = (req, res) => {
  const id = req.params.id
  const doc = req.body

  Note.updateOne({_id: id}, doc, (err, _) => {
    if (err) {
      res.status(500).send({
        status: false,
        msg: "Error editing document: " + err,
        doc: null
      })
    } else {
      res.status(200).send({
        status: true,
        msg: "Succeed",
        doc: doc
      })
    }
  })
}

module.exports = { home, getAll, getOneID, create, del, edit }
