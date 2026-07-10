const { required } = require("joi");
const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const { hashPassword, comparePassword } = require("../middleware/userMiddleware");
const userSchema = new mongoose.Schema({
name:{
    type : String,
    required : true,
    trim: true
},
email:{
    type : String,
    required : true,
    uniqe : true,
    lowerCase: true,
    trim: true
},
password : {
    type : String,
    trim: true,
    required: true,
},
otp :{
    type : String,
    default: null
},
otpExpiary : {
    type : Date,
    default : null
}
},
{
    Timestamp: true
})
//use middleware for hash password pre save
userSchema.pre("save", hashPassword);
//use middleware for compare password pre save
userSchema.methods.comparePassword = comparePassword


module.exports = mongoose.model("users",userSchema)