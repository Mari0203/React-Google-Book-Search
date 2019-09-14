// Packages
const express = require("express");
const path = require("path");
const routes = require("./routes");
var mongoose = require("mongoose");

// If deployed, use the deployed database.  Otherwise, use the local database:
const PORT = process.env.PORT || 3001;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://akira108:adom1n@ds311968.mlab.com:11968/heroku_n09d73q8";

// Initialize Express and call files from 'routes folder'
const app = express();
var routes = require("./routes/routes.js");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// Make 'public' a static folder
// app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));

// Connect to the Mongo DB:
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
