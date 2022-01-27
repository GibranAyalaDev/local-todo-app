const express = require("express")
const userCtl = require("../controllers/user.ctl")
const router = express.Router()

router.get("/", userCtl.home)

module.exports = router
