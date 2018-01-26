import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/pages/home.js";
import Domroutes from "./components/DOMroutes.js";
const App = () =>

    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Domroutes}>
        </Route>
      </div>
    </Router>;


export default App;

{/* These are sub-routes under the  home route
<Route exact path="/logout" component={Logout} />
<Route exact path="/login" component={Login} />
<Route exact path="/find-recipes" component={Findrec} />
<Route exact path="/find-restaurants" component={Findres} />
<Route exact path="/post-recipes" component={Postrec} />*/}