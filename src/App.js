import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/home.js";
import Login from "./components/pages/login.js";
import Logout from "./components/pages/logout.js";
import Findrec from "./components/pages/findrecipe.js";
import Findres from "./components/pages/findrestaurant.js";
import Postrec from "./components/pages/postrecipe.js";
import Domroutes from "./components/DOMroutes.js";

const App = () =>
  <Router>
    <div>
      <Domroutes/>
      <Route exact path="/" component={Home} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/find-recipes" component={Findrec} />
      <Route exact path="/find-restaurants" component={Findres} />
      <Route exact path="/post-recipes" component={Postrec} />
    </div>
  </Router>;

export default App;

