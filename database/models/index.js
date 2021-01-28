const db = require("../dbinit");
const Student = require("./Student");
const Campus = require("./Campus");
const User = require("./User");
const Item = require("./Item");

//require("./models");
// not needed
// maybe change the syntax to get it better?

// association
Campus.hasMany(Student);
Student.belongsTo(Campus);

//

User.hasMany(Item);
Item.belongsTo(Student);

// remove this after project is done, allows for table changes in db
db.sequelize.sync({ alter: true });

module.exports = {
  Student,
  Campus,
  User,
  Item,
};

// module.exports = db;
