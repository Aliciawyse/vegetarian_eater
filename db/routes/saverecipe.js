
/*var mongoose = require("mongoose");


var axios = require("axios");

var db = require("../models/addedreceipes.js");
console.log(db)

var array = [];

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/vegetarian_db", {
  useMongoClient: true
});

// Routes
module.exports = function (app){
// A GET route for scraping the abcnews website

  app.post("/postrecipes", function(req, res) {
    console.log(req.body.recipe)
    var comment = req.body.recipe
    db.Recipes
    .create(req.body.recipe)
    .then(function(dbresult) {
      console.log(dbresult)
    })
    })
}*/
  
