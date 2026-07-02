const express = require ("express");
const router = express.Router();
const todaySales = require("./todaysSales")
const monthlySales = require("./monthlySales")
const dashboard = router.use("/dashboard", todaySales, monthlySales)
module.exports = dashboard