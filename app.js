const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
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
