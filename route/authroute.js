const route = require("express").Router();
const authController = require("../controller/authController");

route.get("/login", authController.login);
route.get("/logout", authController.logout);
module.exports = route;
