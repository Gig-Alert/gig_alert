const router = require("express").Router();
const home = require("./home.js");

// Book routes
router.use("/home", home);

module.exports = router;
