import React from "react";
import { Switch, Route } from "react-router";
import cookie from "cookie";

// Components + Containers
import Internal from "../src/Components/Internal";
import External from "../src/Components/External";
import ExternalMap from "../src/Components/ExternalMap";
import Login from "../src/Components/Login";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={External} />
      <Route path="/login" component={Login} />
      <Route path="/map" component={ExternalMap} />
      <Route path="/dashboard" component={Internal} />
    </Switch>
  );
};

export default Router;
