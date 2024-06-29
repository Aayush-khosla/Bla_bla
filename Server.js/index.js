const authroute = require('./routes/authroute');
const conn = require('./Db/Conn.js')
const express  = require('express')
const app = express();

app.use(express.json());
app.get('/' ,(req,res)=>{
    res.send("Hello this main route");
})


app.use('/api/auth' , authroute);

app.listen(3000, (err)=>{
    conn();
    if(err)console.log(err);
    else console.log("Server is working")
})

