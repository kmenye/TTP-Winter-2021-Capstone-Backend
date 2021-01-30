const Sequelize = require('sequelize');
const { name } = require('../package.json');

// Initialize database with Sequelize
const db = new Sequelize(
  // `postgres://<your_user_name>:<your_password>@localhost/${name}`,
  process.env.DATABASE_URL || `postgres://postgres:Kuzya718@localhost/${name}`,
  {
    logging: false,
  }
);

module.exports = db;
