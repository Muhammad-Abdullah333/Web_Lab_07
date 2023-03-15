const userModel = require("../Models/userSchema");

let signup = (req, res) => {
    let user = new userModel({
        username: req.body.username,
        password: req.body.password,
    });
    user.save().then((user) => {
        res.status(200).json({ message: "User created successfully!", user: user });
    }).catch((err) => {
        res.status(500).json({ message: "Error creating user!", error: err });
    });
}


let asd = (req, res) => {
    res.send("Hello Meow User!");
}

module.exports  = signup;

