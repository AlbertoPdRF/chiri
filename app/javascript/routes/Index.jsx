import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from '../components/Home/Home';

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />

      <Redirect to="/" />
    </Switch>
  </Router>
);
