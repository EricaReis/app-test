

import React from "react";
import { Route, Switch} from 'react-router-dom';

import Home from "../pages/Home";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/ddd" component={Home} />
  </Switch>
);

export default Routes;