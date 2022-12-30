const express = require("express");
const {AdminController} = require("./admin.controller.js");
// import auth from "../../../middleware/adminTokenMiddlware.js";
const router = express.Router();

router.post("/login", AdminController.login);

// router.post("/", AdminController.createAdmin);
// router.get("/", auth.checkToken, AdminController.getAllAdmins);
// router.get("/:id", auth.checkToken, AdminController.getOneAdminByAdminId);

module.exports = { router };
