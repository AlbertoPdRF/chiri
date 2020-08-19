import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from '../components/Home/Home';
// import Products from '../components/Products/Products';

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      {/*<Route path="/products" exact component={Products} />*/}

      <Redirect to="/" />
    </Switch>
  </Router>
);
