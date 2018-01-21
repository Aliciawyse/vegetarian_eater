import React from "react";
import { Link } from "react-router-dom";

const Domroutes = () =>
  <ul className="nav nav-tabs">
    <li className="home">
      <Link to="/">Home</Link>
    </li>
    <li className="frecipes">
      <Link to="/find-recipes">Blog</Link>
    </li>
    <li className="frest">
      <Link to="/find-restaurants">Contact</Link>
    </li>
    <li
      className="postrecipes">
      <Link to="/post-recipes">Learn</Link>
    </li>
    <li className="logout">
      <Link to="/logout">Logout</Link>
    </li>
  </ul>;

export default Domroutes;