import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";

// Components + Containers
import DashBoard from "../src/Containers/DashBoard";
import External from "../src/Components/External";
import Login from "../src/Containers/Login";
import Listings from "../src/Components/Listings";
import AddBiz from "../src/Containers/AddBiz";

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
      <ProtectedRoute path="/addbiz" component={AddBiz} />
      <ProtectedRoute path="/dashboard" component={DashBoard} />
    </Switch>
  );
};

export default Router;
