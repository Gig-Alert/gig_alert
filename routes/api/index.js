const router = require("express").Router();
const Band = require("../../models/bands");

router.get("/", (req, res) => {
  res.send("API ROUTE!");
});

router.get("/bands", (req, res) => {
  Band.find((err, bands) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: bands });
  });
});

router.get("/google", (req, res) => {
  //passport
  res.send("logging in");
});

router.get("/logout", (req, res) => {
  //passport
  res.send("logging out");
});
router.post("/bands", (req, res) => {
  Band.create(req.body).then(function(band) {
    res.send(band);
  });
});

module.exports = router;
