const router = require("express").Router();
const Band = require("../../models/bands");

router.get("/", (req, res) => {
  res.send("API ROUTE!");
});

router.get("/bands", (req, res) => {
  res.send("connected to api route");
});

router.post("/bands", (req, res) => {
  Band.create(req.body).then(function(band) {
    res.send(band);
  });
});

// Book routes
//router.use("/bands", bandsRoutes);
// router.post("/bands", (req, res) => {
//   const bands = new Bands();
//   // body parser lets us use the req.body
//   const { name, email, date, type, county } = req.body;
//   if (!name || !email || !date || !type || !county) {
//     // we should throw an error. we can do this check on the front end
//     return res.json({
//       success: false,
//       error: "You must provide an band name, date, email, and county"
//     });
//   }
//   bands.name = name;
//   bands.email = email;
//   bands.date = date;
//   bands.type = type;
//   bands.county = county;
//   bands.save(err => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });

// router.put("/bands/:bandsId", (req, res) => {
//   const { bandsId } = req.params;
//   if (!bandsId) {
//     return res.json({ success: false, error: "No bands id provided" });
//   }
//   Bands.findById(bandsId, (error, comment) => {
//     if (error) return res.json({ success: false, error });
//     const { name, email, date, type, county } = req.body;
//     if (name) bands.name = name;
//     if (email) bands.email = email;
//     if (date) bands.date = date;
//     if (county) bands.type = type;
//     if (type) bands.county = county;
//     comment.save(error => {
//       if (error) return res.json({ success: false, error });
//       return res.json({ success: true });
//     });
//   });
// });

module.exports = router;
