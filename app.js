const express = require("express");
const fs = require("fs");
const path = require("path");

let fileNames = fs.readdirSync("resources");

const app = express();

app.get('/api/images/random', (req, res) => {
    res.sendFile(path.join(__dirname, "resources", fileNames[Math.floor(Math.random()*fileNames.length)]));
    console.log(fileNames);
});


app.use(express.static("public"));
app.use(express.json());

app.listen(8080, () => {
  console.log("listening on 8080");
});
