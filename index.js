require("dotenv").config();

const express = require("express");
const cors = require("cors");

const dbConnection =
  require("./config/dbConnection");

const errorHandler =
  require("./middleware/errorHandler");

const app = express();

dbConnection();

app.use(cors());
app.use(express.json());

app.use(
  "/api/auth",
  require("./routes/authenticationRoutes")
);

app.use(
  "/api/profile",
  require("./routes/userProfileRoutes")
);

app.use(
  "/api/products",
  require("./routes/productRoutes")
);

app.use(
  "/api/orders",
  require("./routes/orderRoutes")
);

app.use(
  "/api/analytics",
  require("./routes/analyticsRoutes")
);

app.use(errorHandler);

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server Running on ${PORT}`
  );
});