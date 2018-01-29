const axios = require("axios");
const express = require("express");
const key = '2e95ddc5'

module.exports = function (app){

  axios
    .get("https://api.edamam.com/search&app_key=" + key + "&from=0&to=3")
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
}