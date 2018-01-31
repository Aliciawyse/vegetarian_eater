var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var SearchRecSchema = new Schema({

  // `title` must be of type String
  recipeinfo: { type: String,
  required: true,
  unique: true
  // `body` must be of type String
  }
});

// This creates our model from the above schema, using mongoose's model method
var SearchedRecipes = mongoose.model("SearchedRecipes", SearchRecSchema);

// Export the Note model
module.exports =  SearchedRecipes

 