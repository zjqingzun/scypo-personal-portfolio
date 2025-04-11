// src/configs/db.js
require("dotenv").config();  // Load environment variables
const config = {
    development: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        port: 3306,
        dialect: "mysql",
        logging: false,
    },
    production: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        port: 3306,
        dialect: "mysql",
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
            connectionTimeoutMillis: 5000,
            idleTimeoutMillis: 30000,
            requestTimeoutMillis: 15000,
        },
    },
};
module.exports = config;