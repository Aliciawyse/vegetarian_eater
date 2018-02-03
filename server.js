const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
//const apiRoutes = require("./api/routes/index.js");

// Serve up static assets
app.use(express.static("client/build"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Use apiRoutes
require("./api/routes/restaurantsAPI.js")(app)
require("./db/routes/dbroutes.js")(app)
require("./api/routes/recipesAPI.js")(app)



var mongoose = require("mongoose");

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/vegetarianeater_db", {
});





// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎😝😎😰🤯🤫 ==> Server now on port ${PORT}!`);
});
