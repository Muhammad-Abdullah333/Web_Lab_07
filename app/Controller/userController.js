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

let login = (req, res) => {
    userModel.findOne({ username: req.body.username }).then((user) => {
        if (user) {
            if (user.password == req.body.password) {
                res.status(200).json({ message: "User logged in successfully!", user: user });
            } else {
                res.status(500).json({ message: "Incorrect password!" });
            }
        } else {
            res.status(500).json({ message: "User not found!" });
        }
    }).catch((err) => {
        res.status(500).json({ message: "Error logging in user!", error: err });
    });
}

let asd = (req, res) => {
    res.send("Hello Meow User!");
}

module.exports = {
    signup,
    login   
};

