const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhotographySchema = new Schema(
  {
    title: {
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
    tags: [{ type: String }],
    takenDate: {
      type: Date,
    },
    description: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Photography = mongoose.model("Photography", PhotographySchema);
module.exports = Photography;
