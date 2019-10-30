const express = require("express");
const app = express();
const fs = require("fs");
const FILE_PATH = "URL_logger.txt";
const port = 3000;



app.use((req, res, next) => {
  let date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  let time = hours + ":" + min;
  const logs = `${time} ${req.method} ${req.originalUrl}`;
  fs.appendFile(FILE_PATH, logs + "\r\n", err => {
    if (err) throw err;

    console.log("The lyrics were updated!");
  });
  next();
});

app.use("/about-us", function(req, res, next) {
  next();
});

app.get("/", (req, res) => res.send("<h1>Welcome</h1>"));

app.get("/about-us", (req, res) => res.send("<h1>About us</h1>"));
app.get("*", (req, res) => res.send("<h1>404</h1>"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
