import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import InitialScreen from '../pages/InitialScreen';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={InitialScreen} exact />
      <Route path="/home" component={Home} exact  />
    </Switch>
  </BrowserRouter>
);

export default Routes;
