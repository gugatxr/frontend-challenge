import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";

export default function MainRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomeScreen />
      </Route>
      <Route path="/details/:id">
        <DetailsScreen />
      </Route>
    </Switch>
  );
}
