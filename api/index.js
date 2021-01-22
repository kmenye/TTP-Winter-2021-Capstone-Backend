const express = require("express");
const router = express.Router();

router.use("/students", require("./student_controller"));
router.use("/campuses", require("./campus_controller"));

module.exports = router;

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

// maybe delete this
// was in depaks code
