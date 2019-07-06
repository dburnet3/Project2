const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/temp_SignUp.html")));

module.exports = function(app) {
    app.get("/", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
          res.redirect("/survey");
        }
        res.sendFile(path.join(__dirname, "../public/temp_SignUp.html"));
      });

      app.get("/login", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
          res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
      });

}
module.exports = router;