const express = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Application Connected to Database");
  })
  .catch((error) => {
    console.log("there is some err in mongo connection", error);
  });

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
  res.send("welcome to homepage");
});

app.get("/user", (req, res) => {
  res.send("welcome to user");
});

app.listen(8800, (err) => {
  if (err) {
    console.log("there is some error in server");
  }
  console.log("backend server is running");
});
