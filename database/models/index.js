const db = require("../dbinit")
const Student = require("./Student")
const Campus = require("./Campus")

// association
Campus.hasMany(Student)
Student.belongsTo(Campus)

// remove this after project is done, allows for table changes in db
db.sequelize.sync({ alter: true })

module.exports = {
  Student,
  Campus,
}
