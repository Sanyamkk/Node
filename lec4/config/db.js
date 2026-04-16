const mongoose = require('mongoose');


// this is the function to connect to the database (it will be called in app.js to connect to the database before starting the server)
const connectDB = async() => {
    await mongoose.connect("mongodb+srv://<yourpassword>:Sanyam@cluster0.0iy6lho.mongodb.net/hlo");

};


module.exports = { connectDB };