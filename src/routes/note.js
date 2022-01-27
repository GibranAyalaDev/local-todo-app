const express = require('express')
const ctrl = require('../controllers/note')

const router = express.Router()

router.get("/", ctrl.home)
router.get("/getall", ctrl.getAll)
router.get("/getoneid/:id", ctrl.getOneID)
router.post("/new", ctrl.create)

module.exports = router
