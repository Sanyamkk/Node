const express = require('express');
const {connectDB} = require('./config/db');
const { UserModel } = require('./models/user');


connectDB();
const app = express();

app.post("/signup", async (req, res) => {
    try {
        const userObj = {
            firstName: "Sanyam",
            lastName: "Kothari",
            emailId: "kotharisanyam6@gmail.com",
            password: "abc@123",
            age: 22,
            gender: "male"
        };

        const user = new UserModel(userObj);
        await user.save();

        res.send("added successfully");
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
});

app.listen(3001, () => {
    console.log("server running on port 3001");
});