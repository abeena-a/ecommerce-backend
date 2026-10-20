const router = require("express").Router();

const analytics =
  require("../controllers/analyticsController");

router.get(
  "/recommendations",
  analytics.recommendProducts
);

module.exports = router;