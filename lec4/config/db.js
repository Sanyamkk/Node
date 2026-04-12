const mongoose = require('mongoose');


const connectDB = async() => {
    await mongoose.connect("mongodb+srv://<your_passward>:Sanyam@cluster0.0iy6lho.mongodb.net/hlo");

};


module.exports = { connectDB };