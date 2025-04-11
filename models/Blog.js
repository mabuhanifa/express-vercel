const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    directors: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
