const express = require ("express");
const app = express()
const User = require ("./Model/User")
require("dotenv").config()




const connectDB = require("./config/connectDB")
connectDB()


app.use(express.json());

app.use("/api/contact" , require("./routes/contact"))
app.use("/api/user" , require("./routes/user"))

const PORT = process.env.PORT;

app.listen(PORT, error =>{
    error ? console.error(`Fail to connect server , ${error}`)
:
console.log(`server is running in PORT ${PORT}`)

})



    

 

 

    
    
   
