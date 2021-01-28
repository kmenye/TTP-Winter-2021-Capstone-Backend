const db = require("../db");
const User = require("./User");
const Item = require("./Item");
const Player = require("./player");
// association
User.hasMany(Item);
Item.belongsTo(User);

// remove this after project is done, allows for table changes in db
db.sync({ alter: true });

module.exports = {
  User,
  Item,
  Player,
};
