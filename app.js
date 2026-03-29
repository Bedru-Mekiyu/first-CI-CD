const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const app = express();
require("dotenv").config();

app.use(helmet());

app.use(cors({
  origin: "*", // later restrict this
}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100, // limit requests
});

app.use(limiter);
// connect to Mongo
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("🚀 App + Mongo Running!");
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port 3000");
});
