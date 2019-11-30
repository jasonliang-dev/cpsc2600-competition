let mongoose = require("mongoose");
let mongoDB =
  "mongodb+srv://root:b6G6bTFTJewOG6E1@cluster0-j6o6r.mongodb.net/comp?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
let connection = mongoose.connection;
connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

module.exports = connection;
