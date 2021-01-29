const Sequelize = require("sequelize");
const db = require("../db");

const Item = db.define("Item", {
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
});

module.exports = Item;
