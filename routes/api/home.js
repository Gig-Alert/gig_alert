const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("HOME ROUTE!");
});

module.exports = router;
