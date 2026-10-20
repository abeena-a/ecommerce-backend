const router = require("express").Router();

const order = require("../controllers/orderController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, order.createOrder);
router.get("/", auth, order.getOrders);
router.put("/:id", auth, order.updateOrder);
router.delete("/:id", auth, order.deleteOrder);

module.exports = router;