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

module.exports = {
  createMovies,
};
