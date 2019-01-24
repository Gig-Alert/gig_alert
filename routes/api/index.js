const router = require("express").Router();
//const bandRoutes = require("./bands");
const passport = require("passport");
const Band = require("../../models/bands");

router.get("/", (req, res) => {
  res.send("API ROUTE!");
});
// Band routes
//router.use("/bands", bandRoutes);

router.get("/bands", (req, res) => {
  //console.log(req.query.county);
  Band.find({ county: req.query.county }, (err, bands) => {
    if (err) return res.json({ success: false, error: err });
    //console.log("RES JSON: ", bands);
    return res.json({ success: true, data: bands });
  });
});

//auth login
router.get("/login", (req, res) => {
  res.render("login");
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get("/logout", (req, res) => {
  //passport
  res.send("logging out");
}),
  router.get(
    "/google/redirect",
    passport.authenticate("google", { failureRedirect: "/", session: false }),
    function(req, res) {
      var token = req.user.token;
      res.redirect("https://localhost:3000?token=" + token);
    }
  );
router.post("/bands", (req, res) => {
  Band.create(req.body).then(function(band) {
    res.send(band);
  });
});

module.exports = router;
