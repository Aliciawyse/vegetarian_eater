import React from "react";
import Dashboard from "./pages/dashboard.js";
import { Route } from "react-router-dom";
import { Level, SubTitle, Icon } from 'reactbulma'
import Logout from "./pages/logout.js";
import Login from "./pages/login";
import Findrec from "./pages/findrecipe";
import Findres from "./pages/findrestaurant";
import Postrec from "./pages/postrecipe";

import 'font-awesome/css/font-awesome.min.css';

const appContainer = ({match, ...props}) =>

    <div>

        <Level style={{marginBottom: "1.5%", padding: "1.5%", backgroundColor: "hsl(171, 100%, 41%)", color: "white"}}>
            <Level.Left>
                <Level.Item>
                    <SubTitle is='5'>
                        <strong style={{fontSize: "25px", color: "white"}}>Vegetarian Eater</strong>
                    </SubTitle>
                </Level.Item>
            </Level.Left>
            <Level.Right>
                <Level.Item><Icon><i style={{fontSize: "28px"}} className="fa fa-user fa-3"/></Icon></Level.Item>
            </Level.Right>
        </Level>

        {/* When in the app, default to show the dashboard */}
        <Route exact path={`${match.url}`} component={Dashboard} />

        {/* defining sub-routes */}
        <Route path={`${match.url}/logout`} component={Logout} />
        <Route path={`${match.url}/login`} component={Login} />
        <Route path={`${match.url}/find-recipes`} component={Findrec} />
        <Route path={`${match.url}/find-restaurants`} component={Findres} />
        <Route path={`${match.url}/post-recipes`} component={Postrec} />

    </div>;

export default appContainer;