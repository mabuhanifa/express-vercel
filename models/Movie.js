const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    images: {
      main: {
        type: String,
        required: true,
      },
      thumbnail: {
        type: String,
        required: true,
      },
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    genres: [{ type: String }],
    description: {
      type: String,
    },
    directors: [{ type: String }],
    distributors: [{ type: String }],
    actors: [{ type: String }],
    personalRating: {
      type: Number,
      min: 0,
      max: 10,
    },
    tags: [{ type: String }],
    remarks: {
      type: String,
    },
    position: {
      type: Number,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
