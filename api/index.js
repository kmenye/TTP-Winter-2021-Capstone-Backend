const router = require("express").Router();
module.exports = router;

// Mounts players api calls from api file on /api/players
router.use("/players", require("./players"));

//Anythingn not found gets a 404
router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

//Export our api so we can use it on our server index file(main exit point for server)

const express = require("express");
const router = express.Router();

router.use("/items", require("./item_controller"));
router.use("/users", require("./user_controller"));

module.exports = router;
