const Sequelize = require("sequelize")
const db = require("../dbinit")

// The campus's name, image, address and description
const Campus = db.sequelize.define("Campus", {
  campusname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
})

module.exports = Campus
