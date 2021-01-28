{/*const Sequelize = require('sequelize');
const { name } = require('../package.json');

// Initialize database with Sequelize
const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${name}`,
  {
    logging: false,
  }
);

module.exports = db;*/}

const Sequelize = require("sequelize");
require("dotenv").config();

// params: database name, username, password (do NOT push your password to the GitHub!)
const db = new Sequelize("garb", "postgres", "Kuzya718", {
  host: "localhost",
  dialect: "postgres",
  omitNull: true,
  port: 5432, 
});
//
const testDatabase = async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully");
  } catch (error) {
    console.error("Unable to connect to database", error);
  }
};

console.log("process.env.host:", process.env.host);

testDatabase();

module.exports = db;

