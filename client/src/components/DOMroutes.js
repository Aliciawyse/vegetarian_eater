import React from "react";
import { Link } from "react-router-dom";
import Login from "./pages/login.js";
import Logout from "./pages/logout.js";
import Findrec from "./pages/findrecipe.js";
import Findres from "./pages/findrestaurant.js";
import Postrec from "./pages/postrecipe.js";
import Dashboard from "./pages/dashboard.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Level, Button, Item, Left, Right, SubTitle } from 'reactbulma'
import { Field, Control } from 'reactbulma'
import { Icon } from 'reactbulma'


const appContainer = ({match}) =>

    <div>

        <Field  style={{backgroundColor: "hsl(171, 100%, 41%)",marginBottom: "2%"}} groupedRight>
            <Control>
                <Icon large>
                    <i className="fa fa-user"/>
                </Icon>
            </Control>
        </Field>

        {/* defining sub-routes*/}
            <Route path={`${match.url}/logout`} component={Logout} />
            <Route path={`${match.url}/login`} component={Login} />
            <Route path={`${match.url}/find-recipes`} component={Findrec} />
            <Route path={`${match.url}/find-restaurants`} component={Findres} />
            <Route path={`${match.url}/post-recipes`} component={Postrec} />

        <Route exact path={`${match.url}`} component={Dashboard}/>

    </div>;

export default appContainer;