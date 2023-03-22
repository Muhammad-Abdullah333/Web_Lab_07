const userModel = require("../Models/userSchema");
const jwt = require("jsonwebtoken");

let signup = (req, res) => {
    let user = new userModel({
        username: req.body.username,
        password: req.body.password,
    });
    console.log(user);
    user.save().then((user) => {
        res.status(200).json({ message: "User created successfully!", user: user });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Error creating user!", error: err });
    });
}

let login = (req, res) => {
    userModel.findOne({ username: req.body.username }).then((user) => {
        if (user) {
            if (user.password == req.body.password) {
                let token = jwt.sign({ id: user._id ,role: user.role}, process.env.SECRET_KEY, { expiresIn: "24h" }); // web token for authentication in multiple requests
                res.status(200).json({ message: "User logged in successfully!", user: user, token: token });
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

let DecodedUser = (req,res ,next) => {
    let token = req.headers['token']
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            res.status(500).json({ message: "Error verifying token!", error: err });
        } else {
            req.decoded = decoded;
            next();
        }
    });
}

let isAdmin = (req,res,next) => {
    if(req.decoded.role == "admin"){
        next();
    }else{
        res.status(403).json({ message: "You are not an admin!" });
    }
}


module.exports = {
    signup,
    login,
    DecodedUser,
    isAdmin
};

