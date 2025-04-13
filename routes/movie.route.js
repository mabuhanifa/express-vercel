const { Router } = require("express");
const {
  createMovies,
  getAllMovies,
  getMovieImages,
  updateMovie,
  getMovieById,
} = require("../controllers/movie.controller");

const router = Router();

router
  .get("/", getAllMovies)
  .get("/images", getMovieImages)
  .post("/", createMovies)
  .patch("/", updateMovie)
  .get("/:id", getMovieById);

module.exports = router;
