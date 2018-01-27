import axios from "axios";

export default {
  getRestaurants: function(query) {
    return axios.get("/search-restaurants");
  },

  getRecipes: function(query) {
    return axios.get("/search-recipes");
  }
};

