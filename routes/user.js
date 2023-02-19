const express = require ("express")
const { register , login } = require ("../Controllers/user");
const isAuth = require("../middlewares/isAuth");
const { registerValidator, validation, loginValidator } = require("../middlewares/validator");


const router = express.Router();


router.post('/register' , registerValidator(), validation ,register)
router.post('/login' , loginValidator(), validation , login)
router.get('/current', isAuth, (req, res) =>
{
  res.send(req.user)
}) 

module.exports = router