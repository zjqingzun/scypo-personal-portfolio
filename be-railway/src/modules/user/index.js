// src/modules/user/index.js
const express = require("express");
const userController = require("./controller");
const router = express.Router();
router.post("/add-new-user", userController.addUser);
router.get("/user-list", userController.getAllUsers);
module.exports = router;