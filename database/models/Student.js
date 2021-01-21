const { Sequelize } = require("sequelize")
const db = require("../dbinit")

// The student's full name, email, image, and gpa
const Student = db.sequelize.define("Student", {
  studentname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gpa: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
})

module.exports = Student
