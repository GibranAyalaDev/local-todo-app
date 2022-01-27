const { Todo } = require('../mongo')

const home = (req, res) => {
  res.status(200).send({
    status: true,
    msg: "Hello Not",
    doc: null,
  })
}

const getAll = (req, res) => {
  Todo.find({}, (err, docs) => {
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
  Todo.findById(req.params.id, (err, docs) => {
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
        doc: docs
      })
    }
  })
}

const create = (req, res) => {
  const body = req.body

  Todo.create(body, (err, docs) => {
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
        doc: body
      })
    }
  })
}

const del = (req, res) => {
  const id = req.body.id

  Todo.deleteOne({_id:id}, (err, docs) => {
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

  Todo.updateOne({_id: id}, doc, (err, _) => {
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
