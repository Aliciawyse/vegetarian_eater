import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Content} from 'reactbulma'


const Dashboard = ({match}) =>

    <div>

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
    </div>;

export default Dashboard;