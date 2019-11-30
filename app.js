const express = require("express");
const fs = require("fs");
const path = require("path");
const Character = require("./models/Character");
require("./db/connection");

let fileNames = fs.readdirSync("resources");

const app = express();

app.get("/api/images/random", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "resources",
      fileNames[Math.floor(Math.random() * fileNames.length)]
    )
  );
});

app.get("/characters", (req, res) => {
  const sorted = req.query.sort;

  Character.find({})
    .sort(sorted ? { appearances: -1 } : {})
    .exec()
    .then(characters => res.send(characters));
});

app.use(express.static("public"));
app.use(express.json());

app.listen(8080, () => {
  console.log("listening on 8080");
});
