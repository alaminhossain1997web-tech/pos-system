const express = require ("express");
const router = express.Router();

 const monthlySales = router.get("/monthlySale",(req,res)=>{
    res.send("monthly Sales report")
})
module.exports = monthlySales