const express = require("express")
const router = express.Router()
const models = require("../database/models")

// GET -> Read All
// localhost:8080/api/campuses
router.get("/", (req, res, next) => {
  models.Campus.findAll({
    // Eager Loading
    include: {
      model: models.Student,
    },
  })
    .then((campuses) => {
      res.status(200).json({
        message: "Got all campuses",
        campuses,
      })
    })
    .catch((err) => {
      res.status(500).json({
        message: "An error has occured getting all campuses",
        err,
      })
    })
})

// POST
// localhost:8080/api/campuses
router.post("/", (req, res, send) => {
  models.Campus.create({
    campusname: req.body.campusname,
    image: req.body.image,
    address: req.body.address,
    description: req.body.description,
  })
    .then((campus) => {
      res.status(200).json({
        message: "Successfully create campus!",
        campus,
      })
    })
    .catch((err) => {
      res.status(500).json({
        message: "An error has occured while creating campus",
        err,
      })
    })
})

// PUT
// localhost:8080/api/campuses/:id
// router.put("/", (req, res, send))

module.exports = router
