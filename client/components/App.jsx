import React from 'react';
import Nav from './Nav.jsx';
let Router = require('react-router');
import FavoriteList from './FavoriteList.jsx';
// import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;
let RouteHandler = Router.RouteHandler;


class App extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div>
        <div id="nav">
           <Link to='home'>Home</Link>
          <Link to='favorites'>My Favorites</Link>
          <RouteHandler/>
        </div>
      </div>
    );
  }
}

let routes = (
  <Route name='ourApp' path='/' hander={require('./ourApp.jsx')}>
    <DefaultRoute handler={require('./App.jsx')} />
    <Route name='favorites' handler={FavoriteList} />
  </Route>
);

Router.run(routes, (Handler) => {
  React.render(<Handler/>, document.body);
});

export default App;

