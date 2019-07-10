const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/temp_SignUp.html")));

module.exports = function(app) {
    app.get("/", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
          res.redirect("/dashboard");
        }
        res.sendFile(path.join(__dirname, "../public/dashboard.html"));
      });

     

}
module.exports = router;