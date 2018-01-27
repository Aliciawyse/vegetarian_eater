import axios from "axios";

export default {
  getCity: function(query) {
    //return axios.get("/search-restaurants",query);
    return axios({
	  method: 'get',
	  url: '/search-city',
	  params: { query: query }
	});
  },

   getRestaurants: function(query) {
    //return axios.get("/search-restaurants",query);
    return axios({
	  method: 'get',
	  url: '/search-restaurants',
	  params: { query: query }
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

