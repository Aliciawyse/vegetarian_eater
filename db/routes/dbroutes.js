
var mongoose = require("mongoose");
var axios = require("axios");

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

        let userRest;
        let restaurants = req.body.query.data
        //console.log('this is the restuarants array',restaurants)
        
        let userID = req.body.id
        
        for(let i = 0; i < restaurants.length; i ++){
            //console.log('\n restaurant ' + i + restaurants[i] + '\n \n \n')
            //console.log(JSON.stringify(restaurants[i], null, '   '))
            //let responseObject = restaurants[i]
            let restObj ={
              id:restaurants[i].id,
              info: {
                name: restaurants[i].name,
                url:restaurants[i].url,
                loc: restaurants[i].location,
              }
            }

           // console.log(restObj)

            let restObjStrg = JSON.stringify(restObj.info, null, '   ')
            //console.log(restObjStrg)


           /* db.Restaurants.create({resID: restObj.id, restaurantinfo: restObjStrg }).then(function(restaurant){
               // console.log("1 restaurant document inserted\n");
                //console.log(restaurant._id +'\n')*/
          
              //console.log("upsert")
            db.Restaurants.findOneAndUpdate({resID: restObj.id, restaurantinfo: restObjStrg }, 
                { resID: restObj.id, restaurantinfo: restObjStrg }, 
                { upsert: true }).then(function(restaurant){
                  
                //console.log(restaurant)
                  //console.log("1 restaurant document inserted\n");
                let restID = restaurant._id
                //console.log(restID)
                  //console.log(userID)
                db.Users.findOne({id: userID}).then(function(resultss){
                    //console.log(resultss.recentres.length)
                    userRest = resultss.recentres
                    //console.log('user Restaurants', userRest)
                    if(resultss.recentres.length === 0 ){
                        console.log('no recipes, push to new user')
                        //console.log(restID)
                        db.Users.findOneAndUpdate({id: userID}, { $push: { recentres: restID } }, { new: true })
                        .then(function(User) {
                
                            //console.log(User)
                            //console.log("results added to recent restaurants searches")
                        })

                    }
                    else if (resultss.recentres.length > 0){

                        for (let i = 0; i < resultss.recentres.length; i++){
                            console.log('there are recipes on user!')
                            console.log(resultss.recentres[i],restID)
                            if (resultss.recentres[i] == restID){
                                //console.log(userRest[i], restID)
                                console.log('this one is already attached to user')
                            }
                        }
                    }
                    else{
                       console.log('not found on user do something')
                      db.Users.findOneAndUpdate({id: userID}, { $push: { recentres: restaurant._id } }, { new: true })
                          .then(function(User) {
                  
                              //console.log(User)
                              //console.log("results added to recent restaurants searches")
                          })
                    }
              
                })
            })
        }
        res.send("Done!")
    })


    app.post("/posting-recsearch", function(req, res) {

        //console.log(req.body)
        
        let recipes = req.body.query.data
        console.log(recipes)

        let recAppArr =[];



        let userID = req.body.id
        //console.log(userID)

        for(let i = 0; i < recipes.length; i ++){
             
            //console.log(JSON.stringify(recipes[i], null, '   '))
                

            let recObj = {
                recname:recipes[i].recipe.label,
                image: recipes[i].recipe.image,
                source: recipes[i].recipe.source,
                url:recipes[i].recipe.url
            }


            let recObjStr = JSON.stringify(recObj, null, '   ')
            //console.log(recObjStr)

            db.SearchedRecipes.findOneAndUpdate({recipeinfo: recObjStr},{recipeinfo: recObjStr },{ upsert: true }).then(function(recipe){
                console.log(recipe)
                //console.log("1 recipe document inserted\n");
                //console.log(recipe._id +'\n')
                recAppArr.push(recipe)
                console.log(i,recAppArr)
                if(i == 9){
                    console.log(recAppArr)
                    res.json(recAppArr)
                }
            }).catch(function(err){
                  console.log(err)
            });
        }
    })

      app.post("/saving-recipe", function(req, res) {
        console.log(req.body)
        let user = req.body.uid
        let recid = req.body.id
        if(req.body.query=='save'){

          db.Users.findOne({id: user})
                    .then(function(User) {

                    function checkSaved(){
                        for (let i = 0; i < User.savedrec.length; i++){
                            if (recid==User.savedrec[i]){
                              return true
                            }
                        }
                    }
                      //console.log(User)
          })

          checkSaved()
          if (checkSaved != true){       
          db.Users.findOneAndUpdate({id: user}, { $push: { savedrec: recid } }, { new: true })
                    .then(function(User) {
                      console.log(User)
                    })
        }
        else return
      }

        else if(req.body.query =='unsave'){
           db.Users.findOneAndUpdate({id: user}, { $pull: { savedrec: recid } }, { new: true })
                    .then(function(User) {
                      console.log(User)
                    })
        }


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
                console.log(result)
                res.send(result)
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
                //console.log(result)
                res.json(result)
            })
            .catch(function(err){
                res.json(err)
        })
    })

}





