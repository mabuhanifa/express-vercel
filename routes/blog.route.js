const { Router } = require("express");

const router = Router();

router
  .get("/", (req, res) => {
    res.json({ message: "Blog route" });
  })
  .post("/", (req, res) => {
    console.log(req.body);
    res.json({ message: req.body });
  });

module.exports = router;
