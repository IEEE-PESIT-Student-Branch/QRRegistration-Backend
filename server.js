const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

app.set("view engine", "ejs");
app.use(express.static("js"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("csv");
});

app.post("/csv", (req, res) => {
  console.log(req.body.info[0].name);
  res.send("POSTed");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});
