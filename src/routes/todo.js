const express = require('express')
const ctrl = require('../controllers/todo')

const router = express.Router()

router.get("/", ctrl.home)

module.exports = router
