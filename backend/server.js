const express = require("express");
const cors = require("cors");

const orderRoutes = require("./routes/orderRoutes");
const pickingListRoutes = require("./routes/pickingListRoutes");
const packingListRoutes = require("./routes/packingListRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

//Routes
app.use("/api/orders", orderRoutes);
app.use("/api/picking-list", pickingListRoutes);
app.use("/api/packing-list", packingListRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
