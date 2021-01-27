const Sequelize = require("sequelize");
const db = require("../dbinit");

// The student's full name, email, image, and gpa
const Item = db.sequelize.define("Item", {
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  item: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Quantity: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Item;

// maybe have date auto logged?
