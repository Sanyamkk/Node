const mongoose = require('mongoose');

const connectDB = async() => {
    await mongoose.connect("mongodb+srv://Sanyamk48:Sanyam@cluster0.0iy6lho.mongodb.net/hlo");

};


module.exports = { connectDB };