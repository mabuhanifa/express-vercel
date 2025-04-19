const { Router } = require("express");
const {
  getAllPhotography,
  createPhotography,
  updatePhotography,
  deletePhotography,
  getPhotographyById,
} = require("../controllers/photography.controller");

const router = Router();

router
  .get("/", getAllPhotography)
  .get("/:id", getPhotographyById)
  .post("/", createPhotography)
  .patch("/:id", updatePhotography)
  .delete("/:id", deletePhotography);

module.exports = router;
