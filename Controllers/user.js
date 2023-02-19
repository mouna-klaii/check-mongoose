const User = require("../Model/User")
const bcrypt = require("bcrypt");
const jwt = require ("jsonwebtoken")


exports.register = async (req , res ) => {
    try {
        const { name , email , password , phone} = req.body ;
        const findUser = await User.findOne({email});
        if (findUser) 
        { 
            return res.status(400).send({error : [{msg : "email already used "}]})  
        }

        const saltRounds =  10 
        const hachedPassword = await bcrypt.hash(password , saltRounds) 
        const newUser = new User({...req.body})
        newUser.password = hachedPassword
       await newUser.save()
       const token = jwt.sign({
        id : newUser._id
    },
    process.env.SCRT_KEY ,
    { expiresIn :"48h"}
    )
               res.status(200).send({succes : [{msg : "register success " , user: newUser , token }]})
       
    } catch (error) {
        res.status(400).send({error : [{msg : "cannot Register"}]}) 
    }
}

exports.login = async(req , res) => {
    try {
        const {email , password} = req.body ;
//
        const findUser = await User.findOne({email});
        if (!findUser) 
        {
            return  res.status(400).send({error : [{msg : "User Not Found "}]}) 
         }
         const checkedPassword = await bcrypt.compare(password , findUser.password) 
    
        if(!checkedPassword){
            return res.status(400).send({error : [{msg : "please checked password "}]})  
        }
        
        const token = jwt.sign({
         id : findUser._id
     },
     process.env.SCRT_KEY ,
     { expiresIn :"48h"}
     )
         res.status(200).send({succes : {msg : "Welcome back " }, user : findUser, token})
    } 
    catch (error) {
        res.status(400).send({error : [{msg : "try again"}]})
    }
}