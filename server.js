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


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎😝😎😰🤯🤫 ==> Server now on port ${PORT}!`);
});


/*
=======
    "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
<<<<<<< HEAD
    "start": "nodemon server.js",
    "prestart": "cd client/ && npm run build",
    "preinstall": "cd client/ && npm install"
=======
    "client": "cd client/ && yarn start",
    "start": "concurrently \"nodemon server.js\" \"npm run client\" ",
    "preinstall": "cd client/ && npm install",
    "prepublish": "cd client/ && npm run build"
>>>>>>> alicia11*/