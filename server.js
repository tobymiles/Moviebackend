const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
// const Movie = require("./model/moviedb");
const movieRoutes = require("./routes/api/movieApi");
const cors = require("cors");

const app = express();

// CONNECT TO DB

const cloudDbUrl =
  "mongodb+srv://Tobecodda:animalfarm1@contactkeeper.dhe80.mongodb.net/moviedata?retryWrites=true&w=majority";

mongoose
  .connect(cloudDbUrl)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

// Enviroment for Port
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//middleware & log request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(cors());
//Create movie api

app.use("/", movieRoutes);

// mongoose and mongo sandbox route

// app.get("/add-movie", (req, res) => {
//   const movie = new Movie({
//     name: "Funny jones",
//     description: "Antegonizing for a new nigeria",
//     releaseDate: "oct 2022",
//     rating: true,
//     ticketPrice: "$300",
//     country: "Nigeria",
//     genre: "Comedy",
//   });

//   movie
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/all-movies", (req, res) => {
//   Movie.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/single-movie", (req, res) => {
//   Movie.findById("633c76726c04602f8da1ad7c")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.listen(PORT, () => {
  console.log(`Port is listening on https://localhost: ${PORT}`);
});
