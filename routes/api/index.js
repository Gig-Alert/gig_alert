const router = require("express").Router();
const home = require("./home.js");

router.get("/", (req, res) => {
  res.send("API ROUTE!");
});

router.get("/findBand", (req, res) => {
  res.send("connected to api route");
});

module.exports = router;
