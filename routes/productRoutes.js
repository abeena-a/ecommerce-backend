const router = require("express").Router();

const product =
  require("../controllers/productController");

const auth =
  require("../middleware/authMiddleware");

const role =
  require("../middleware/roleMiddleware");

router.get("/", product.getProducts);
router.get("/:id", product.getProduct);

router.post(
  "/",
  auth,
  role("admin"),
  product.createProduct
);

router.put(
  "/:id",
  auth,
  role("admin"),
  product.updateProduct
);

router.delete(
  "/:id",
  auth,
  role("admin"),
  product.deleteProduct
);

module.exports = router;