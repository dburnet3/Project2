const router = require("express").Router();
const db = require("../models");



router.get("/api/user", async (req, res) => res.json((await db.User.findAll({}))));


module.exports = router;
