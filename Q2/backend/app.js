// importing the express, bodyparser and cors
const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors");

// Initialising if application is in production
const production = process.env.NODE_ENV === "production";

// Initialising my express app
const app = express();

// Importing my routes from routes directory
const conferenceRoutes = require("./routes/conference");

// Using body parser to pass data into
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Using cors to allow access
app.use(cors());

// All routes will be accessed from localhost:5000/api
app.use("/api", conferenceRoutes);

if (!production) {
  console.log("Starting App");
}

module.exports = app;
