# Vegetarian_eater
A tool to help people do three things: find nearby vegetarian focused restaurants, find vegetarian recipes and add/save their own vegetarian recipes.

## Authors

* [**Alicia Barrett**](https://github.com/Aliciawyse)
* [**Lauren Spencer**](https://github.com/lspencer3)

## Built with

* HTML5
* JavaScript
* React
* [React-components](https://github.com/kulakowka/react-bulma) for CSS framework called [Bulma](https://bulma.io/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Heroku](https://www.heroku.com/)
* MongoDB with Mongoose
* GET and POST routes for retrieving and adding new restaurant and recipe data
* [Firebase](https://firebase.google.com/) to create user accounts that include name, email and password

## Development Process

[1. Concept](#1-concept)
[2. Process](#2-process)
[3. Challenges and Successes!](#3-challenges-and-successes)
[4. Future Additions](#5-future-additions)


### 1. Concept

We wanted to offer people a faster route to vegetarian food. We decided to build a simple catalog for nearby vegetarian restaurants and recipes.  

### 2. Process

We used the node module `create-react-app` to generate the boilerplate of our React application. We made changes to the boilerplate so our folder structure looks like this:

```
vegetarian_eater
│   README.md
│   package.json   
│   package-lock.json
│   server.js
│      
└───api
│   │   APIkeys.js
│   │   index.js
│   │
│   └───routes
│       │   recipesAPI.js
│       │   restaurantsAPI.js
│       
└───client
│   │   package.json   
│   │   package-lock.json
│   │   yarn.lock
│   │
│   └───build    
│   │      ...
│   └───public
│   │      ...
│   └───src
│   │     App.js
│   │     index.js
│   │     ...
│   └───api
│   │     API.js  
│   │   
│   └───components
│           │   appContentContainer.js
│           │  
│           └───pages
│           │       dashboard.js
│           │       findrecipe.js
│           │       findrestaurant.js
│           │       landingPage.js
│           │       login.js
│           │       postrecipe.js
│           │       profile.js
│           │       recipesform.js
│       
└───db
    │   package.json   
    │   package-lock.json
    │   yarn.lock
    │
    └───models  
    │   │   addedrecipes.js  
    │   │   index.js
    │   │   ingredients.js
    │   │   recipes.js   
    │   │   restaurants.js
    │   │   users.js  
    │         
    └───routes
        │   dbroutes.js 
 
```

Our `src` directory contains the heart of the React app. It includes our main component `App.js`. `appContentContainer.js` is the centerpiece of our app. Thanks to the routing in this file we have a single page app that maps URLs to specific views. These views are located in the `components` directory to organize our components.

Our `db` directory includes the back-end functionality of our app. We use Mongoose to provide database access for our app. 

### 3. Challenges and successes

Some challenges included
* determining what parts of the boilerplate we needed and did not need
* understanding how React's routing works and how to use the `match` object
* the UI is defined entirely in JSX 
        
Some successes included:
* we built a single page app with React
        

### 4. Future additions

There's a lot of room for improvement. We plan on giving users the ability to log out and back in. We could accomplish this with Firebase. We also plan on making our app more responsive. 