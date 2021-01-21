const express = require("express")
const router = express.Router()

router.use("/students", require("./student_controller"))

module.exports = router
