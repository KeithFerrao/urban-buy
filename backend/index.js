// index.js or app.js
const express = require("express"); // Need to install Express
const cors = require("cors"); // Need to install cors
const authRouter = require("./routes/auth")
const productRouter = require("./routes/products")
const connectToMongo = require("./db");

connectToMongo(); // connect DB
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

//Available Routes
app.use("/api/user", authRouter);
app.use("/api/products", productRouter);

app.listen(port, () => {
  console.log("Urban-Buy is running on port 5000");
});