const express = require("express");
const { validateEmail, validPassword } = require("../../helpers/utils");
const userSchema = require("../../models/userSchema");

const registrationController = async (req,res)=>{
    const {name, email, password, otp, otpExpiary} = req.body;

    const error = {};
    if (!name || name.trim() === "" ){
        error.name = " fullName is required!"
    }
    if (!email || email.trim() === "" || validateEmail(email)){
        error.email = "A valid email is required!"
    }
    if (!password || password.trim() === ""){
        error.password = "Password is required!"
    }
    if (!validPassword(password) || password.trim()=== ""){
        error.password = "minimum 8 digit password required"
    }
    if (Object.keys(error).length > 0){
        return res.status(400).json({
            message: error
        })
    }

    const existingEmail = await userSchema.findOne({email});

//  existing email validation from Schema
    if (existingEmail){
        return res.status(400).json({message:" This email already used"})
    }
//creating userSchema and save 
    try {
        const user = await userSchema.create({name, email, password, otp, otpExpiary});
        res.status(200).json({
        message:"Registration successfull please verify your email"
    })
// show error if  registration failed
    } catch (error) {
        console.log(error)
        res.status(500).json({message: " ragistration failed!"})
    }
}
module.exports = registrationController