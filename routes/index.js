const express = require ("express");
const router = express.Router();
const base_url = process.env.BASE_URL
const authroute = require("./auth/index")
const dashboard = require("./dashboard/index")
router.use(base_url, authroute);
router.use(base_url, dashboard);
module.exports = router