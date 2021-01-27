const Sequelize = require("sequelize");
const db = require("../dbinit");

// The student's full name, email, image, and gpa
const User = db.sequelize.define("User", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
});

module.exports = User;
