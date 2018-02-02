
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
          instructions:req.body.query.intr
        }

        let ingrs = req.body.query.ingr
       // console.log(ingrs)
        //console.log(resObj)


        db.Recipes.create(resObj).then(function(resp){
            let UserID = req.body.id
            //console.log("1 recipe document inserted");
            res.send(resp)
            console.log(resp)
            let recid = resp._id
            //console.log(recid)
            for(let i = 0; i < ingrs.length; i++){
                db.Ingredients.create(ingrs[i]).then(function(ingredient){
                     // console.log("1 ingredient adeded document inserted");
                      //console.log(ingredient._id)
                      let ingredientID = ingredient._id
                      db.Recipes.findOneAndUpdate({_id: recid}, { $push: { ingredients: ingredientID } }, { new: true })
                          .then(function(Recipe) {
                      
                               console.log(Recipe)
                              //console.log("results added to recent restaurants searches")
                          })

                  })
              }
              console.log(UserID)
              db.Users.findOneAndUpdate({id: UserID}, { $push: { postedrec: recid } }, { new: true })
              .then(function(User){
                console.log(User)
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
        let restaurants = req.body
        console.log('hello',restaurants)

        let userID = req.body.id
        //req.body.query.data.map(restuarant => {
        for(let i = 0; i < restaurants.length; i ++){
            //console.log('\n restaurant ' + i + restaurants[i] + '\n \n \n')
            //console.log(JSON.stringify(restaurants[i], null, '   '))
            //let responseObject = restaurants[i]
            let restObj = {
              resid: restaurants[i].id,
              name: restaurants[i].name,
              url:restaurants[i].url,
              loc: restaurants[i].location,
            }

            //console.log(restObj)

            let restObjStrg = JSON.stringify(restObj, null, '   ')
            //console.log(restObjStrg)


            db.Restaurants.create({restaurantinfo: restObjStrg }).then(function(restaurant){
               // console.log("1 restaurant document inserted\n");
                //console.log(restaurant._id +'\n')

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
        console.log(recipes[0])



        let userID = req.body.id
        console.log(userID)

        for(let i = 0; i < recipes.length; i ++){
          
            //console.log(JSON.stringify(recipes[i], null, '   '))
                

            let recObj = {
                recname:recipes[i].recipe.label,
                image: recipes[i].recipe.image,
                source: recipes[i].recipe.source,
                url:recipes[i].recipe.url,
                ingr: recipes[i].recipe.ingredientLines,
                ingr2: recipes[i].recipe.ingredients
            }


            let recObjStr = JSON.stringify(recObj, null, '   ')
            //console.log(recObjStr)

            db.SearchedRecipes.create({recipeinfo: recObjStr }).then(function(recipe){
                console.log(recipe)
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
                //console.log('populated restaurants', result)
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
        console.log(req.query[0])
        db.Users
            .findOne({id:req.query[0]})
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





