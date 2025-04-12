const { Router } = require("express");
const {
  createMovies,
  getAllMovies,
} = require("../controllers/movie.controller");

const router = Router();

router.get("/", getAllMovies).post("/", createMovies);

module.exports = router;
