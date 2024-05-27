const route = require("express").Router();
const userController = require("../controller/userController");

route.post("/user", userController.createUser);

module.exports = route;
