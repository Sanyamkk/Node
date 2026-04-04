const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await  mongoose.connect("mongodb+srv://Sanyamk48:Sanyam@cluster0.0iy6lho.mongodb.net/hlo");
        console.log("DB connected successfully");
    } catch (err) {
        console.log("DB connection error:", err);
    }
};

module.exports = {connectDB};