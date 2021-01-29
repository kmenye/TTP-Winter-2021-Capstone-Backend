const Player = require('./player');
const Item = require('./item');
const User = require('./user');

User.hasMany(Item);
Item.belongsTo(User);

//ASSOICATIONS GO HERE -- Read more at https://sequelize.org/master/manual/assocs.html

module.exports = {
  Player,
  Item,
  User
};
