const userRoutes = require("express").Router();
const {signup,login, DecodedUser, isAdmin} = require("../Controller/userController");
const jwt = require("jsonwebtoken");



userRoutes.post("/signup",signup);
userRoutes.post("/login",login);
userRoutes.get("/profile",DecodedUser,isAdmin,(req,res) => {
    res.status(200).json({ message: "User profile!", user: req.decoded });
});


module.exports = userRoutes;
