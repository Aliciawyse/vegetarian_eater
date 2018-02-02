
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
       
        console.log(req.body.query)

        let resObj = {
          title: req.body.query.title,
          link:req.body.query.link,
          instructions:req.body.query.instr
        }

        let ingrs = req.body.query.ingr
        console.log(ingrs)


        db.Recipes.create(resObj).then(function(resp){
            let UserID = req.body.id
            console.log("1 recipe document inserted");
            res.send(resp)
            let recid = resp._id
            console.log(recid)
              for(let i = 0; i < ingrs.length; i++){
                  db.Ingredients.create(ingrs[i]).then(function(ingredient){
                     // console.log("1 ingredient adeded document inserted");
                      //console.log(ingredient._id)
                      let ingredientID = ingredient._id
                      db.Recipes.findOneAndUpdate({_id: recid}, { $push: { ingredients: ingredientID } }, { new: true })
                          .then(function(Recipe) {
                      
                               //console.log(Recipe)
                              //console.log("results added to recent restaurants searches")
                          })

                  })
              }
              console.log(UserID)
              db.Users.findOneAndUpdate({id: UserID}, { $push: { postedrec: recid } }, { new: true })
              .then(function(UserResult){
                console.log(UserResult)
              })

          })
    })



    app.post("/posting-user", function(req, res) {
    
        console.log(req.body)

        db.Users.create(req.body[0]).then(function(resp){
              console.log("1 user document inserted");
              res.send("1 user document inserted")
        }) 
    })

    app.post("/posting-restsearch", function(req, res) {
        //console.log('this is working',JSON.stringify(req.body, null, '   '))
        //res.send("... adding results to restaurant search")
        //console.log('this is working',JSON.stringify(req.body.query.data, null, '   '))
        let restaurants = req.body.query.data
        //console.log(req.body.id)

        let userID = req.body.id
        //req.body.query.data.map(restuarant => {
        for(let i = 0; i < restaurants.length; i ++){
            //console.log('\n restaurant ' + i + restaurants[i] + '\n \n \n')
            console.log(JSON.stringify(restaurants[i], null, '   '))
            let responseObject = restaurants[i]
            let restObj = {
              resid: responseObject.id,
              name: responseObject.name,
              url:responseObject.url,
              loc: responseObject.location,
            }

            //console.log(restObj)

            let restObjStrg = JSON.stringify(restObj, null, '   ')
            //console.log(restObjStrg)


            db.Restaurants.findOneAndUpdate({resid: restObj.resid }, { resid: restObj.resid, restaurantinfo: restObjStrg }, { upsert: true }).then(function(restaurant){
                console.log("1 restaurant document inserted\n");
                console.log(restaurant._id +'\n')

                db.Users.findOneAndUpdate({id: userID}, { $push: { recentres: restaurant._id } }, { new: true })
                    .then(function(User) {
            
                        //console.log(User)
                        //console.log("results added to recent restaurants searches")
                    })
                }).catch(function(err){
                      console.log(err)
            });
        }
        res.send("Done!")
    })


    app.post("/posting-recsearch", function(req, res) {

        //console.log(req.body)
            
        let recipes = req.body.query.data
        console.log(recipes)

        let userID = req.body.id
        console.log(userID)

        for(let i = 0; i < recipes.length; i ++){
          
            console.log(JSON.stringify(recipes[i], null, '   '))
                

            let recObj = {
                recname:recipes[i].label,
                image: recipes[i].image,
                source: recipes[i].source,
                url:recipes[i].url,
                ingr: recipes[i].ingredientLines,
                ingr2: recipes[i].ingredients
            }


            let recObjStr = JSON.stringify(recObj, null, '   ')
            console.log(recObjStr)

            db.SearchedRecipes.create({recipeinfo: recObjStr }).then(function(recipe){
                console.log("1 recipe document inserted\n");
                console.log(recipe._id +'\n')

                db.Users.findOneAndUpdate({id: userID}, { $push: { recentrec: recipe._id } }, { new: true })
                    .then(function(User) {
                
                        //console.log(User)
                        //console.log("results added to recent restaurants searches")
                     })
                }).catch(function(err){
                      console.log(err)
                });
            }
        res.send("Done!")
    })

    app.get("/getuserrests", function(req,res){
        //console.log(req.query.id)
        db.Users
            .findOne({id:req.query.id})
            .populate("recentres")
            .then(function(result){
                console.log('populated restaurants', result)
                res.send(result)
            })
            .catch(function(err){
                res.json(err)
        })
    })



    app.get("/getuserrecs", function(req,res){
        //console.log(req.query.id)
        db.Users
            .findOne({id:req.query.id})
            .populate("recentrec")
            .then(function(result){
                //console.log(result)
                res.json(result)
            })
            .catch(function(err){
                res.json(err)
        })
    })


    app.get("/search-postedrecipes", function(req,res){
        console.log(req.query)
        db.Users
            .findOne({id:req.query})
            .populate("postedrec")
            .then(function(result){
                console.log(result)
                res.json(result)
            })
            .catch(function(err){
                res.json(err)
        })
    })

}

/*// Route to see what library looks like WITH populating
app.get("/populated", function(req, res) {
  // Using our Library model, "find" every library in our db and populate them with any associated books
  db.Library
    .find({})
    // Specify that we want to populate the retrieved libraries with any associated books
    .populate("books")
    .then(function(dbLibrary) {
      // If any Libraries are found, send them to the client with any associated Books
      res.json(dbLibrary);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});*/




