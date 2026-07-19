// models/User.js

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/admin")
    .then(() => {
        console.log("mongodb is connected")
    })
    .catch((err) => {
        console.log(err.message)
    })

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        uniqeu: true
    },
    id: {
        type: Number,
        required: true,
        uniqeu: true
    }
});

module.exports = mongoose.model("User", userSchema, "free");
