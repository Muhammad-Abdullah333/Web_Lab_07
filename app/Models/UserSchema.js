const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min:3,
        max: 20
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user'
    },
    images: {
        type: [String]
    }
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);
