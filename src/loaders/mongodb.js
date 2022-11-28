const mongoose = require('mongoose');

async function startDB(){
    await mongoose.connect('mongodb+srv://carol:pilhanova123@cluster0.6mqiywa.mongodb.net/test');
}

module.exports = startDB;