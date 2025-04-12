const { Router } = require("express");
const {
  createMovies,
  getAllMovies,
  getMovieImages,
} = require("../controllers/movie.controller");

const router = Router();

router
  .get("/", getAllMovies)
  .get("/images", getMovieImages)
  .post("/", createMovies);

module.exports = router;
