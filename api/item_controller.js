const express = require("express");
const router = express.Router();
const models = require("../database/models");

// GET -> Read All
// localhost:8080/api/students/

// maybe should be get all based on user id?

router.get("/", (req, res, next) => {
  models.Item.findAll()
    .then((items) => {
      res.status(200).json({
        items,
      });
    })
    .catch((err) => {
      res.status(500).json({
        err,
      });
    });
});

// there should be a way to connect the item to the owner automatically
// should only be able to do this
// when you are signed in

// POST -> Create
// localhost:8080/api/students
router.post("/", (req, res, next) => {
  console.log("request body:", req.body);
  models.Item.create({
    type: req.body.type,
    item: req.body.item,
    quantity: req.body.quantity,
    date: req.body.date,
  })
    .then((item) => {
      res.status(200).json({
        message: "Successfully created item",
        item,
      });
    })
    .catch((err) => {
      res.status(500).json({
        err,
      });
    });
});

// PUT -> Update //timestamp: 1:19:22 aj words of wisdom, why axios requests can differentiate between the same route names here, sequelize review session (sequelize tutorial)
router.put("/:id", (req, res, next) => {
  console.log("request body put:", req.body);
  models.Item.findByPk(req.params.id).then((item) => {
    if (!item) {
      res.status(404).json({
        message: "An item by that id was not found to update",
      });
    }

    item.update({
      type: req.body.type,
      item: req.body.item,
      quantity: req.body.quantity,
      date: req.body.date,
    });

    item.save();

    res.status(200).json({
      message: "Successfully updated item",
      student,
    });
  });
});

// DELETE -> Delete, timestamp:1:08:25
router.delete("/:id", (req, res, next) => {
  models.Item.findByPk(req.params.id).then((item) => {
    if (!item) {
      res.status(404).json({
        message: "An item by that id was not found to delete",
      });
    }

    item.destroy();

    res.status(200).json({
      message: "Successfully deleted item",
    });
  });
});

module.exports = router;
