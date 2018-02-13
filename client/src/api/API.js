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
	  		params: { 
	  			lat: query.latitude,
	  			lon: query.longitude
	  		}
 		});
  	},

  	getPostedRecipes: function(query) {
    	return axios({
	  		method: 'get',
	  		url: '/search-postedrecipes',
	 		params: query 
	   	});
  	},

  	getRecipes: function(query) {
    	//return axios.get("/search-recipes", query);
    	return axios({
	  		method: 'get',
	  		url: '/search-recipes',
	 		params: query 
	   	});
  	},

  	savingRecipes:function(query,uid,id){
  		return axios({
	  		method: 'post',
		  	url: '/saving-recipe',
		  	data: {
		  		query,
		  		uid,
                id
		  	}
		})
  	},

 	postRecipes: function(query,id){

		return axios({
	 		method: 'post',
	  		url: '/posting-recipe',
	  		data: {
	  			query,
	  			id
	  		}
		});
	},


	postMongoUser: function(query){
  	
	 	return axios({
		  	method: 'post',
		  	url: '/posting-user',
	  		data: query
		});
	},

	postResSearch: function(query, id){
  	
		return axios({
	  		method: 'post',
	  		url: '/posting-restsearch',
	  		data: {
	  			query,
	  			id
	  		}
		});
	},

	postRecSearch: function(query, id){
  	
		return axios({
	  		method: 'post',
	  		url: '/posting-recsearch',
	  		data: {
	  			query,
	  			id
	  		}
		});
	},

	getrecentRest: function(id){
  	
	 	return axios({
		  	method: 'get',
		  	url: '/getuserrests',
		  	params: {id:id}
		});
	},
	getrecentRecs: function(id){
  	
	 	return axios({
		  	method: 'get',
		  	url: '/getuserrecs',
		  	params: {id:id}
		});
	}
};

