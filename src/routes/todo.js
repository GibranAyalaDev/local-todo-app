const express = require('express')
const ctrl = require('../controllers/todo')

const router = express.Router()

router.get("/", ctrl.home)
router.get("/getall", ctrl.getAll)
router.get("/getoneid/:id", ctrl.getOneID)
router.post("/new", ctrl.create)
router.post("/del", ctrl.del)
router.post("/edit/:id", ctrl.edit)

module.exports = router
