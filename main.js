import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/components/App.jsx';
import Rate from './client/components/Rate.jsx';
import Favorite from './client/components/Favorite.jsx';
import Home from './client/components/Home.jsx';
import Nav from './client/components/Nav.jsx';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path='favorites' component={Favorite}></Route>
      <Route path='rate' component={Rate}></Route>
    </Route>
  </Router>,
  document.getElementById('app'));
