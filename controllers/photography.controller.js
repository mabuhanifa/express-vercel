const Photography = require("../models/Photography");

const createPhotography = async (req, res) => {
  try {
    const { title, images, tags, takenDate, description, location } = req.body;

    if (!title || !images?.main || !images?.thumbnail) {
      return res.status(400).json({
        message: "Title and images (main and thumbnail) are required",
      });
    }

    const photography = new Photography({
      title,
      images,
      tags: tags || [],
      takenDate: takenDate ? new Date(takenDate) : undefined,
      description,
      location,
    });

    const savedPhotography = await photography.save();
    res.status(201).json(savedPhotography);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating photography", error: error.message });
  }
};

const getAllPhotography = async (req, res) => {
  try {
    const photography = await Photography.find().sort({ createdAt: -1 });
    res.status(200).json(photography);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching photography", error: error.message });
  }
};

const getPhotographyById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid photography ID" });
    }

    const photography = await Photography.findById(id);

    if (!photography) {
      return res.status(404).json({ message: "Photography not found" });
    }

    res.status(200).json(photography);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching photography", error: error.message });
  }
};

const updatePhotography = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, images, tags, takenDate, description, location } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid photography ID" });
    }

    const photography = await Photography.findById(id);

    if (!photography) {
      return res.status(404).json({ message: "Photography not found" });
    }

    if (title) photography.title = title;
    if (images) photography.images = { ...photography.images, ...images };
    if (tags) photography.tags = tags;
    if (takenDate) photography.takenDate = new Date(takenDate);
    if (description) photography.description = description;
    if (location) photography.location = location;

    const updatedPhotography = await photography.save();
    res.status(200).json(updatedPhotography);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating photography", error: error.message });
  }
};

const deletePhotography = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid photography ID" });
    }

    const photography = await Photography.findByIdAndDelete(id);

    if (!photography) {
      return res.status(404).json({ message: "Photography not found" });
    }

    res.status(200).json({ message: "Photography deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting photography", error: error.message });
  }
};

module.exports = {
  createPhotography,
  getAllPhotography,
  getPhotographyById,
  updatePhotography,
  deletePhotography,
};
