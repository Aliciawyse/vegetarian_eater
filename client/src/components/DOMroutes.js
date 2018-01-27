import React from "react";
import { Link } from "react-router-dom";
import Login from "./pages/login.js";
import Logout from "./pages/logout.js";
import Findrec from "./pages/findrecipe.js";
import Findres from "./pages/findrestaurant.js";
import Postrec from "./pages/postrecipe.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Container, Card, Content, } from 'reactbulma'


const appContainer = ({match}) =>

    <div>

        <Nav hasShadow>
            <Container>
                <Nav.Left>
                    <Nav.Item>
                        <p>VEGETARIAN EATER</p>
                    </Nav.Item>
                </Nav.Left>
                <Nav.Toggle />
            </Container>
        </Nav>

        {/* These are sub-routes under the  home route*/}
            <Route path={`${match.url}/logout`} component={Logout} />
            <Route path={`${match.url}/login`} component={Login} />
            <Route path={`${match.url}/find-recipes`} component={Findrec} />
            <Route path={`${match.url}/find-restaurants`} component={Findres} />
            <Route path={`${match.url}/post-recipes`} component={Postrec} />


        <Container style={{display: "flex", justifyContent: "space-evenly"}}>
        <Card style={{width:"30%"}} className="restaurantCard">

            <Card.Image src='http://bulma.io/images/placeholders/1280x960.png' square='128by128'  />
            <Card.Content>
                <Content>
                    <Link to={`${match.url}/find-restaurants`}>Find Restaurants</Link>
                </Content>
            </Card.Content>

        </Card>

            <Card style={{width:"30%"}} className="restaurantCard">

                <Card.Image src='http://bulma.io/images/placeholders/1280x960.png' square='128by128'  />
                <Card.Content>
                    <Content>
                        <Link to={`${match.url}/find-recipes`}>Find Recipes</Link>
                    </Content>
                </Card.Content>

            </Card>

            <Card style={{width:"30%"}} className="restaurantCard">

                <Card.Image src='http://bulma.io/images/placeholders/1280x960.png' square='128by128'  />
                <Card.Content>
                    <Content>
                        <Link to={`${match.url}/post-recipes`}>Post Recipes</Link>
                    </Content>
                </Card.Content>

            </Card>
        </Container>

        <ul className="nav nav-tabs">
    <li className="home">
      <Link to={`${match.url}`}>Home</Link>
    </li>
    <li className="Login">
      <Link to={`${match.url}/login`}>Login</Link>
    </li>

    <li className="logout">
      <Link to={`${match.url}/logout`}>Logout</Link>
    </li>
  </ul>;
    </div>

export default appContainer;