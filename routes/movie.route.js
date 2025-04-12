const { Router } = require("express");
const { createMovies } = require("../controllers/movie.controller");

const router = Router();

router
  .get("/", (req, res) => {
    res.json({ message: "Movies route" });
  })
  .post("/", createMovies);

module.exports = router;
