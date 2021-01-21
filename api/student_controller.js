const express = require("express")
const router = express.Router()
const models = require("../database/models")

// GET
// localhost:8080/api/students/
router.get("/", (req, res, next) => {
  models.Student.findAll()
    .then((students) => {
      res.status(200).json({
        students,
      })
    })
    .catch((err) => {
      res.status(500).json({
        err,
      })
    })
})

// GET by PK
// CODE

// POST
// localhost:8080/api/students
router.post("/", (req, res, next) => {
  models.Student.create({
    studentname: req.body.studentname,
    email: req.body.email,
    image: req.body.image,
    gpa: req.body.gpa,
  })
    .then((student) => {
      res.status(200).json({
        message: "Successfully insered student into database",
        student,
      })
    })
    .catch((err) => {
      res.status(500).json({
        err,
      })
    })
})

// DELETE, timestamp:1:08:25
router.delete("/:id", (req, res, next) => {
  models.Student.findByPk()
})

module.exports = router
