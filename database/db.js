const Sequelize = require("sequelize");
const databaseName = "garbo-test";

console.log("Opening database connection");
console.log('still here');

const db = new Sequelize(`postgres://localhost:5000/${databaseName}`, { logging: false });

module.exports = db;