const mongoose = require('mongoose');

async function startDB(){
    await mongoose.connect('mongodb+srv://senai:senha@123@cluster0.12bwmyr.mongodb.net/test');
}

module.exports = startDB;