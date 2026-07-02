const express = require ("express");
const router = express.Router();

 const todaySales = router.get("/todaySales",(req,res)=>{
    res.send("today Sales report")
})
module.exports = todaySales