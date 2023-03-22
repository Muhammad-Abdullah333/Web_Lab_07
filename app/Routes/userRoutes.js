const userRoutes = require("express").Router();
const {signup,login} = require("../Controller/userController");

userRoutes.post("/signup",signup);
userRoutes.post("/login",login);

module.exports = userRoutes;
