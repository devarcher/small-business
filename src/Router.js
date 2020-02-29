import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";

// Components + Containers
import Login from "../src/Containers/Login";
import Listings from "../src/Containers/Listings";
import AddBiz from "../src/Containers/AddBiz";
import SingleBiz from "../src/Containers/SingleBiz";
import MapPage from "../src/Components/Map";

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
      <Route exact path="/" component={Listings} />
      <Route path="/login" component={Login} />
      <Route path="/singlebiz/:id" component={SingleBiz} />
      <Route path="/map" component={MapPage} />
      <ProtectedRoute path="/dashboard" component={Listings} />
      <ProtectedRoute path="/addbiz" component={AddBiz} />
    </Switch>
  );
};

export default Router;
