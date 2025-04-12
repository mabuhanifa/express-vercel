const Movie = require("../models/Movie");

const createMovies = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMovieImages = async (req, res) => {
  try {
    const movies = await Movie.find().select("images");
    if (!movies) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createMovies,
  getAllMovies,
  getMovieImages,
};
