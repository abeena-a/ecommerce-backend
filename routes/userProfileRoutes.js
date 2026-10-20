const router = require("express").Router();

const profile = require("../controllers/userProfile");
const auth = require("../middleware/authMiddleware");

router.get("/", auth, profile.getProfile);
router.put("/", auth, profile.updateProfile);
router.delete("/", auth, profile.deleteProfile);

module.exports = router;