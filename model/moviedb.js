const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieObject = {
  name: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  rating: { type: String, required: true },
  ticketPrice: { type: Number, required: true },
  country: { type: String, required: true },
  genre: { type: String, required: true },
  image: { type: String },
};

// CREATE THE DB COLLECTION

const movieSchema = new Schema(movieObject, { timestamps: true });

// Name our collection

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
