import React from "react";
import { Link, Route } from "react-router-dom";
import { Container, Card, Content} from 'reactbulma';



const Dashboard = ({match}) =>

    <div>


        {/* page content */}
        <Container style={{display: "flex", justifyContent: "space-evenly"}}>
            <Card style={{width:"30%"}} className="restaurantCard">

                <Card.Image src='https://i.pinimg.com/564x/dd/e9/07/dde9074f2c35ca171766d307b542823e.jpg' square='128by128'  />
                <Card.Content>
                    <Content>
                        <Link to={`${match.url}/find-restaurants`}>Find Restaurants</Link>
                    </Content>
                </Card.Content>

            </Card>

            <Card style={{width:"30%"}} className="restaurantCard">

                <Card.Image src='https://www.superhealthykids.com/wp-content/uploads/2017/03/Instant-Pot-Risotto-19-768x1152.jpg' square='128by128'  />
                <Card.Content>
                    <Content>
                        <Link to={`${match.url}/find-recipes`}>Find Recipes</Link>
                    </Content>
                </Card.Content>

            </Card>

            <Card style={{width:"30%"}} className="restaurantCard">

                <Card.Image src='https://www.superhealthykids.com/wp-content/uploads/2016/09/butternutsquashsoup-4-768x1152.jpg' square='128by128'  />
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