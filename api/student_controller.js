const express = require("express");
const router = express.Router();
const models = require("../database/models");

//

router.post("/newStudent", async (req, res, next) => {
  console.log("req.body", req.body);
  try {
    let newStudent = await models.Student.create(req.body);
    res.status(201).send(newStudent);
    console.log(newStudent);
  } catch (error) {
    res.status(404).json({
      message: "Failed to create new student",
    });
    next(error);
  }
});

// GET -> Read All
// localhost:8080/api/students/
router.get("/", (req, res, next) => {
  models.Student.findAll()
    .then((students) => {
      res.status(200).json({
        students,
      });
    })
    .catch((err) => {
      res.status(500).json({
        err,
      });
    });
});

// GET by PK -> Read by ID
router.get("/:id", (req, res, next) => {
  models.Student.findByPk(req.params.id).then((student) => {
    if (!student) {
      res.status(404).json({
        message: "A student by that id was not found to read",
      });
    }

    res.status(200).json({
      student,
    });
  });
});

module.exports = router;
