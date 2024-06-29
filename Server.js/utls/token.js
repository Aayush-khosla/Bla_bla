

const jwt = require('jsonwebtoken');
const jwtkey = "ghsxhkhjhbjkkjkj678jjb"


const genratetoken = (userid , res)=>{

        const token = jwt.sign({userid},jwtkey,{
            expiresIn:"1d"
        })

        res.cookie("jwt" ,token,{
            maxAge: 24*60*60*1000
        })


}

module.exports = genratetoken;