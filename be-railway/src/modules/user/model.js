// src/modules/user/model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../../utils/db"); // Import the database connection
const User = sequelize.define(
    "user",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        gender: {
            type: DataTypes.ENUM("Male", "Female", "Other"),
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        paranoid: true, // Enables soft deletes
    }
);
module.exports = User;