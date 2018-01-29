//this is our entry file, where the app begins

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from "firebase";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBJTr4V2whCJ33_ZBChrHRJke5woV-YJj8",
    authDomain: "vegetarian-eater.firebaseapp.com",
    databaseURL: "https://vegetarian-eater.firebaseio.com",
    storageBucket: "vegetarian-eater.appspot.com",
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
