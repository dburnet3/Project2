const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/temp_SignUp.html")));


router.get("/survey", (req,res) =>
    res.sendFile(path.join(__dirname, "../public/survey.html")));
   

router.get("/dashboard", (req, res) =>
    res.sendFile(path.join(__dirname,"../public/dashboard.html")));

  
module.exports = router;