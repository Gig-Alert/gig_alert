const router = require("express").Router();
const bandsController = require("../../controllers/bandsController");

// Matches with "/api/bands"
router
  .route("/")
  .get(bandsController.find)
  .post(bandsController.create);

// Matches with "/api/bands/:id"
router
  .route("/id/:id")
  .get(bandsController.findById)
  .put(bandsController.update)
  .delete(bandsController.remove);

module.exports = router;
