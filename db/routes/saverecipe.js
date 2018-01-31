
var mongoose = require("mongoose");
var axios = require("axios");


// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/vegetarianeater_db", {
});

// Require all models
const db = require("../models");


// Routes
module.exports = function (app){
// A GET route for scraping the abcnews website

  app.post("/posting-recipe", function(req, res) {
    console.log(req.body)
    //ingrARR = req.body.data.ingr
    let resObj = {
      title: req.body.title,
      link:req.body.title,
      instructions:req.body.instr
    }
    //console.log(db)
db.Recipes.create(resObj).then(function(resp){
    console.log("1 document inserted");
    res.send("1 document inserted")
}) 
})
}