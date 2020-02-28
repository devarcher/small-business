import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";

// Components + Containers
import DashBoard from "../src/Containers/DashBoard";
import External from "../src/Components/External";
import Login from "../src/Containers/Login";
import Listings from "../src/Containers/Listings";
import AddBiz from "../src/Containers/AddBiz";
import SingleBiz from "../src/Components/SingleBiz";
import Map from "../src/Components/Map";

export const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={External} />
      <Route path="/login" component={Login} />
      <Route path="/listings" component={Listings} />
      <Route path="/singlebiz" component={SingleBiz} />
      <Route path="/map" component={Map} />
      <ProtectedRoute path="/dashboard" component={DashBoard} />
      <ProtectedRoute path="/addbiz" component={AddBiz} />
    </Switch>
  );
};

export default Router;
