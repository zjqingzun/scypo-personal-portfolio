// src/utils/db.js
const Sequelize = require("sequelize");
const dbConfig = require("../configs/db.js");  // Import database configuration
// Create a Sequelize instance based on the environment
const sequelize = new Sequelize(dbConfig[process.env.NODE_ENV]);
// Establish the database connection
sequelize
.sync()
.then(() => {
console.log("✔ Database connected successfully.");
})
.catch((err) => {
console.error("✘ Error connecting to the database:", err);
});
module.exports = sequelize;  // Export the Sequelize instance