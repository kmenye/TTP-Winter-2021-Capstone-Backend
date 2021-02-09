const Sequelize = require("sequelize");
const databaseName = "garbo-test";

const db = new Sequelize(`postgres://localhost:5000/${databaseName}`, { logging: false });

module.exports = db;