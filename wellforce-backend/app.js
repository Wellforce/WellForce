const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const security = require("./middleware/security");
const authRouter = require("./routes/auth");
const prefRouter = require("./routes/preference")
const { PORT } = require("./config");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use(security.extractUserFromJwt);
app.use("/auth", authRouter);
app.use("/preference",prefRouter);
// app.get("/", (req, res) => {
//   res.status(200).send({ ping: "pong" });
// });
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Good Post");
});

module.exports = app;





