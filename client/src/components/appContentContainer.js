import React from "react";
import Dashboard from "./pages/dashboard.js";
import { Route } from "react-router-dom";
import { Field, Control, Icon } from 'reactbulma'
import Logout from "./pages/logout.js";
import Login from "./pages/login";
import Findrec from "./pages/findrecipe";
import Findres from "./pages/findrestaurant";
import Postrec from "./pages/postrecipe";

const appContainer = ({match}) =>

    <div>

        <Field  style={{backgroundColor: "hsl(171, 100%, 41%)",marginBottom: "2%"}} groupedRight>
            <Control>
                <Icon large>
                    <i className="fa fa-user"/>
                </Icon>
            </Control>
        </Field>

        {/* When in the app, default to show the dashboard */}
        <Route exact path={`${match.url}`} component={Dashboard}/>

        {/* defining sub-routes */}
        <Route path={`${match.url}/logout`} component={Logout} />
        <Route path={`${match.url}/login`} component={Login} />
        <Route path={`${match.url}/find-recipes`} component={Findrec} />
        <Route path={`${match.url}/find-restaurants`} component={Findres} />
        <Route path={`${match.url}/post-recipes`} component={Postrec} />

    </div>;

export default appContainer;