const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3001;
const blogRoute = require("./routes/blog.route");
const movieRoute = require("./routes/movie.route");
const photographyRoute = require("./routes/photography.route");
const cors = require("cors");
const { connectDB } = require("./config/db");

app.use(cors());
app.use(express.json());
connectDB();

app.use("/blog", blogRoute);
app.use("/movie", movieRoute);
app.use("/photo", photographyRoute);

app.get("/", (req, res) => {
  res.json({ message: "Bonjour mon ami!" });
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

module.exports = (req, res) => {
  app(req, res);
};
