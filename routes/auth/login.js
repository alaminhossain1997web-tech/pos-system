const express = require ("express");
const router = express.Router();

const login = router.get("/login",((req,res)=>{
    res.send("login Router")
}));
module.exports = login