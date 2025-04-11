// Application configuration (e.g., middleware, routes)
// src/app.js
const express = require("express");
const cors = require("cors");
const userRoutes = require("./modules/user"); // Import the user routes
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/users", userRoutes); // Register user routes
module.exports = app;