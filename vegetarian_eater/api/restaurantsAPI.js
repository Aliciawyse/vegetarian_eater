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
  
app.get("/search-restaurants", (req, res) => {

  
    zomato
  .search({
    q: 'Leopold Cafe & Bar',
    count: 3
  })
  .then(function(data) {
    console.log(data);
    res.send(data)
  })
  .catch(function(err) {
    console.error(err);
  });


};

