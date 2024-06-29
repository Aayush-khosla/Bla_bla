const mongoose = require('mongoose');

const conn = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/blabla');
        console.log("DB connected ... ")
    }
    catch(err){
        console.error(err);
    }
}

module.exports = conn;