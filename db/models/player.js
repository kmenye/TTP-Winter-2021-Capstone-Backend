const Sequelize = require('sequelize');
const db = require('../db');

//Sample Model  Read More At https://sequelize.org/master/manual/model-basics.html

const Electronics = db.define('electronics', {
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  zip: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  objectid: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Electronics;
