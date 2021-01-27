const db = require("../dbinit")
const Electronics = require('./electronics');


db.sequelize.sync({ alter: true})
//associations


module.exports = {
  Electronics,
};
