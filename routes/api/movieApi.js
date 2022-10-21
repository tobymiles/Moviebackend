const express = require("express");
const router = express.Router();
const movieController = require("../../controller/movieController");

router.post("/createMovie", movieController.create_movie_api);
router.get("/allMovies", movieController.findAll_movie_api);

module.exports = router;
