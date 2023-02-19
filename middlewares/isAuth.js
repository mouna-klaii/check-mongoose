const User = require("../Model/User")
const jwt = require("jsonwebtoken")
const user = require("../routes/user")
const isAuth = async(req,res,next) =>{
    try {
      const token = req.headers["authorization"]  
      if(! token){
        return res.status(400).send({error: [{msg  : "not autorized 1" }]})
      }
      const decoded = jwt.verify(token, process.env.SCRT_KEY)
      const findUser = await User.findOne({_id : decoded.id})
      if(! findUser){
        return res.status(400).send({error: [{msg  : "not autorized 2" }]})
      }
      req.user = findUser
      next()
    } 
    catch (error) {
        return res.status(400).send({error: [{msg  : "not autorized 3" }]})
    }
}
module.exports = isAuth