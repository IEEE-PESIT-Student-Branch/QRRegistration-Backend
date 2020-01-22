const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

var registration = require("./routes/registration");

app.set("view engine", "ejs");
app.use(express.static("js"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/registration", registration);

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  );
});

//Handle unhandled Rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Unhandled Rejection: ${err.message}`.red);
  server.close(() => process.exit(1));
});
