const express = require("express");
const {UserController} = require("./user.controller.js");
const auth = require("../../middleware/userTokenMiddlware.js");
const router = express.Router();

router.post("/", UserController.createUser);
router.post("/login", UserController.login);
// router.get("/", UserController.getAllUsers);
// router.get("/:id", , UserController.getOneUserByUserId);

module.exports = { router };
