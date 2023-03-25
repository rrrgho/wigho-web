import React from 'react';

import PageScrollTop from "../../components/pageToTop/PageScrollTop";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../../pages/Home";
import Consult from "../../pages/Consult";
import SoftwareDevelopment from "../../pages/SoftwareDevelopment";
import LandingPage from "../../pages/LandingPage";
import Error404 from "../../pages/Error/Error404";


const AppRoute = () => {
    return (
        <Router>
            <PageScrollTop>
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL + "/"}`} exact component={Home}/>
                    <Route path={`${process.env.PUBLIC_URL + "/consult"}`} exact component={Consult}/>
                    <Route path={`${process.env.PUBLIC_URL + "/product/software-development"}`} exact component={SoftwareDevelopment}/>
                    <Route path={`${process.env.PUBLIC_URL + "/product/landing-page"}`} exact component={LandingPage}/>
                    <Route path="*" component={Error404}/>
                </Switch>
            </PageScrollTop>
        </Router>
    )
}

export default AppRoute
