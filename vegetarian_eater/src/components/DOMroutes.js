import React from "react";
import { Link } from "react-router-dom";

const Domroutes = () =>
  <ul className="nav nav-tabs">
    <li className="home">
      <Link to="/">Home</Link>
    </li>
    <li className="frecipes">
      <Link to="/find-recipes">Find Recipes</Link>
    </li>
    <li className="frest">
      <Link to="/find-restaurants">Find Restaurants</Link>
    </li>
    <li
      className="postrecipes">
      <Link to="/post-recipes">Post Recipes</Link>
    </li>
    <li className="logout">
      <Link to="/logout">Logout</Link>
    </li>
  </ul>;

export default Domroutes;