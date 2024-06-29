
const user = require('../modal/user.js');
const bcrypt  = require('bcrypt');
const salt = 10;

const genratetoken = require('../utls/token.js');


const login = async(req,res)=>{
    try{

        const {Username , Password }  =req.body;
        const user = await findOne({Username})
        if(user){
           
            const ans = await bcrypt.compare(Password ,salt);
            if(ans){
                genratetoken(user._id ,res);
                res.status(200).json({
                    id : user._id,
                })

            }else return res.status(400).json({error: "Incorrect  Username/password" }) 
        }else return res.status(400).json({error: "Incorrect  Username/password" }) 

    }catch(error){
        res.status(500).json({error : "Internal Server Error"})
    }
}
const logout = async()=>{
    //   console.log("logout")
    try{
        res.cookie("jwt" , "" ,{maxAge:0});
        res.status(200).json({
            message:"logout"
        })
    }catch(error){
        res.status(500).json({error : "Internal Server Error"})
    }
}


const signup = async(req,res)=>{
     try{
        const {Username , Email , Password , cPassword , Phone_no , profile_pic,isdriver}=req.body;

        if(Password !== cPassword)return res.status(400).json({error:"Password not matched"})

        const u = await user.findOne({Username});
        if(u)return res.status(400).json({error:"User Name already exists"})
        
           const hpassword =  await bcrypt.hash(Password , salt);

            const newuser = new user({
                Username,Email,Password:hpassword,Phone_no,profile_pic,isdriver
            })

             genratetoken(newuser._id , res);
            await newuser.save();
            res.status(201).json({
                id : newuser._id,
            })

     }catch(err){
        res.status(500).json({error:"Internal Server Error"});
     }
}

module.exports = {login , signup ,logout}