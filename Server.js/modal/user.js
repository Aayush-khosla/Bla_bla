
const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
    Username:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    },
    Phone_no:{
        type:String,
        require:true
    },
    profile_pic:{
        type:String,
        default : ""
    },
    isdriver:{
        type:Boolean,
        default:false
    },
    verification_status:{
        type:Boolean,
        default:false
    },
})

const User = mongoose.model("User" , userSchema);
module.exports = User;