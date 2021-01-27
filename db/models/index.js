const db = require("../dbinit");
const User = require("./User");
const Item = require("./Item");

// association
User.hasMany(Item);
Item.belongsTo(User);

// remove this after project is done, allows for table changes in db
db.sequelize.sync({ alter: true });

module.exports = {
  User,
  Item,
};
