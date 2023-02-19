const express = require("express");

const Contact = require("../Model/Contact")
const router = express.Router();

router.get("/test", (req,res) =>{
    res.send("Hello 12345")
  }
)

router.post("/add" , async(req , res) => {
  try {
      const {name , email , phone} = req.body 
      const newContact = new Contact ({name , email , phone})
      await newContact.save()
      res.status(200).send({msg : "contact Object Has been Added" , newContact})
  } catch (error) {
      res.status(400).send({msg : "Please Enter Another Email  " , err : error.message})
  }
})



router.get("/all-user" , async(req,res) =>{
  try {
    const listContacts = await Contact.find()
    res.status(200).send({msg : "Contact list", listContacts})
  }
   catch (error) {
    res.status(400).send({msg : "contact non existant" , error})
  }
  }
 )

 
 router.delete("/:_id" , async(req,res) =>
 {
try {
  const {_id} =req.params;
  await Contact.findOneAndDelete({_id})
  res.status(200).send({msg :"contact deleted"})

} catch (error) {
  res.status(400).send({msg : "contact not deleted" , error})
}
 })

 router.put("/:_id" , async(req,res) =>{
  try {
    const {_id} = req.params;
    const result = await Contact.updateOne({_id} , {$set: {...req.body}})
    res.status(200).send({msg: "contact updated :"})
  } catch (error) {
    res.status(400).send({msg : "contact not updated" , error})
  }
 })
 router.get("/:_id" , async(req,res) =>{
  try {
    const contacttoGet = await Contact.findOne({_id : req.params._id});
    res.status(200).send({msg: "contact to get :" , contacttoGet })
  } catch (error) {
    res.status(400).send({msg : "contact not getted contact" , error})
  }
 })
module.exports = router