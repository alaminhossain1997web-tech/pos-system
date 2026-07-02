const express = require ("express");
const router = express.Router();
const login = require("./login")
const registration = require("./registration")
 const authroute = router.use("/auth",login, registration);
module.exports = authroute