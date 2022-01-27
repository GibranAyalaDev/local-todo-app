const express = require('express')
const ctrl = require('../controllers/secret')

const router = express.Router()

router.get("/", ctrl.home)
router.get("/getall", ctrl.getAll)

module.exports = router
