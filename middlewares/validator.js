const {check , validationResult} = require("express-validator")
const token = require ("./isAuth")

exports.registerValidator = () => [
    check('name' , "please enter your name").not().isEmpty(),
    check('email' , "please enter your valid email").isEmail(),
    check('password' , "please enter your password").isLength({min:6}),
    check('phone' , "please insert your correctly phone").not().isEmpty()
 
]
exports.loginValidator = () => [
    check("email" , "please enter your valid email").isEmail().not().isEmpty(),
    check("password" , "please enter your password").isLength({min:6})
]
exports.validation = (req , res , next) =>
{
    const error = validationResult(req)
    if(!error.isEmpty())
    {
    return res.status(400).json({error: error.array()})
     }
    next()
}
