const express = require ("express");
const registrationController = require("../../controllers/authController/registrationController");
const router = express.Router();

const registration = router.post("/registration", registrationController);
module.exports = registration