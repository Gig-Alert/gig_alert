const router = require("express").Router();
const bandsController = require("../../controllers/bandsController");

// Matches with "/api/bands"
router
  .route("/bands")
  .get(bandsController.findAll)
  .post(bandsController.create);

// Matches with "/api/bands/:id"
router
  .route("/id/:id")
  .get(bandsController.findById)
  .put(bandsController.update)
  .delete(bandsController.remove);

router.get("/api/flowers", (req, res) => {
  res.send("connected to api route in bands.js");
});

module.exports = router;
