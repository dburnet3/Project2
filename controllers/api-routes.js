const router = require("express").Router();
const db = require("../models");

router.get("/api/schools", async (req, res) => res.json((await db.School.findAll({}))));

module.exports = router;