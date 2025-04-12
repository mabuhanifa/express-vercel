const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const blogRoute = require("./routes/blog.route");
const movieRoute = require("./routes/movie.route");
const { connectDB } = require("./config/db");
app.use(express.json());
connectDB();

app.use("/blog", blogRoute);
app.use("/movie", movieRoute);

app.get("/", (req, res) => {
  res.json({ message: "Bonjour mon ami!" });
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});

module.exports = (req, res) => {
  app(req, res);
};
