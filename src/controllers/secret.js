const { Secret } = require('../mongo')

const home = (req, res) => {
  res.status(200).send({
    status: true,
    msg: "Hello",
    doc: null
  })
}

const getAll = (req, res) => {
  Secret.find({}, (err, docs) => {
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

const getOneID = (req, res) => {
  const id = req.params.id

  Secret.findOne({ _id: id }, (err, doc) => {
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
        doc
      })
    }
  })
}

const create = (req, res) => {
  const content = req.body.content
  const note = req.body.note

  Secret.create({ content, note }, (err, docs) => {
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
        doc: { content, note }
      })
    }
  })
}

const del = (req, res) => {
  const id = req.body.id
  Secret.deleteOne({ _id: id }, (err, docs) => {

    if (err) {
      res.status(500).send({
        status: false,
        msg: "Error deleting note: " + err,
        doc: null
      })
    } else {
      res.status(200).send({
        status: true,
        msg: "Succeed",
        doc: docs,
      })
    }
  })
}

module.exports = { home, getAll, getOneID, create, del }
