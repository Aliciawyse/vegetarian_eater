import axios from "axios";

export default {
  getCity: function(query) {

    return axios({
	  method: 'get',
	  url: '/search-city/restaurants',
	  params: { query: query }
	});
  },

   getRestaurants: function(query) {
   	console.log(query.latitude, query.longitude)
    return axios({
	  method: 'get',
	  url: '/search-restaurants',
	  params: { lat: query.latitude,
	  	lon: query.longitude
	  }
 	});
  },

  getRecipes: function(query) {
    return axios.get("/search-recipes", query);
  },

 postRecipes: function(query){
  	
	 return axios({
	  method: 'post',
	  url: '/posting-recipe',
	  data: query
	});

	}

};



