const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });

const mongoose = require("mongoose");
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/bry-wheel");
mongoose.connect("mongodb://localhost:27017/bry-wheel");

module.exports = mongoose.connection;