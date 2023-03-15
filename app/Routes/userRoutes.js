const userRoutes = require("express").Router();
const signup = require("../Controller/userController");

userRoutes.post("/signup",signup);

module.exports = userRoutes;
