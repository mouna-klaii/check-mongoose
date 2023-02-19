const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ContactSchema = new Schema ({
    name:{
        type: String,
         required :true
    } ,
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: Number
    }
     
}
)
module.exports = Contact = mongoose.model("Contact", ContactSchema) 