const Movie = require("../model/moviedb");

async function create_movie_api(req, res, next) {
  try {
    const newMovie = new Movie(req.body);
    await newMovie.save();

    res.status(200).json({
      message: "success",
      data: newMovie,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: "server error",
      data: err.message,
    });
  }
}

async function findAll_movie_api(req, res, next) {
  try {
    const allMovies = await Movie.find();
    res.json({
      message: "success",
      data: allMovies,
    });
  } catch (err) {
    console.log(err.message);
    res.json({
      message: "server error",
      data: err.message,
    });
  }
}

module.exports = {
  create_movie_api,
  findAll_movie_api,
};
