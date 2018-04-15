const axios = require("axios");
const express = require("express");
const appkey = '96b01f00ea9002544f83e698ba981811'
const appid = '1d80aa61'

module.exports = function (app){
app.get("/search-recipes", (req, res) => {
	console.log(req.query[0])
  
  axios
    .get("https://api.edamam.com/search?q=" + req.query[0] + "&app_id=" + appid + "&app_key=" + appkey + '&from0&to20&health=vegetarian')
    .then(function(body) {
    //console.log(body.data);
    res.send(body.data.hits)
  })
  .catch(function(err) {
    console.error(err);
    //res.send(err)
  });

})
}


//https://api.edamam.com/search?q=cheese&app_id=1d80aa61&app_key=96b01f00ea9002544f83e698ba981811&from0&to20
