const express = require ("express");
const router = express.Router();

const registration = router.get("/registration",((req,res)=>{
    res.send("Registration Router")
}));
module.exports = registration