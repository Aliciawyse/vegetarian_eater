const Zomato = require('zomato.js');

const keys = require('../APIkeys.js');

const express = require("express");


//const axios = require("axios");
//const express = require("express")
//const router = require("express").Router();

const zomato = new Zomato(keys.zomato)

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
module.exports = function (app){
    
app.get("/search-city", (req, res) => {

  console.log(req.query)
    zomato
  .cities({
    q:req.query.query,
    count: 5  
  })
  .then(function(data) {
    console.log(data[0].id);
    let cityid = data[0].id
     zomato
  .search({
    entity_id: cityid,
    entity_type: 'city',
    count: 5,
    cuisines: '308',
    sort: 'rating',
    order: 'desc'
  })
  .then(function(data) {
    console.log(data);
    res.send(data)
  })
  .catch(function(err) {
    console.error(err);
  });
  })
  .catch(function(err) {
    console.error(err);
  });


});

app.get("/search-restaurants", (req, res) => {

  console.log(req.query)
    zomato
  .search({
    q:req.body,
    count: 5,
    lat:req.body.geoloc.latitude,
   lon:req.body.geoloc.longitude,
   cuisines: 308,

    
  })
  .then(function(data) {
    console.log(data);
    res.send(data)
  })
  .catch(function(err) {
    console.error(err);
  });


});
}


