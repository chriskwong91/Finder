import React from 'react';
import Nav from './Nav.jsx';
// import Router = require('react-router');
import FavoriteList from './FavoriteList.jsx';
import { Link } from 'react-router';
// import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

// let DefaultRoute = Router.DefaultRoute;
// let Route = Router.Route;
// let RouteHandler = Router.RouteHandler;


class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div id="nav">
          {this.props.children}
          <Link to='favorites'><button className='btn btn-success'>My Favorites</button></Link>
          <Link to='/'>Finder</Link>
        </div>
      </div>
    );
  }
}

// <Link to='home'>Home</Link>
// let routes = (
//   <Route name='ourApp' path='/' hander={require('./ourApp.jsx')}>
//     <DefaultRoute handler={require('./App.jsx')} />
//     <Route name='favorites' handler={FavoriteList} />
//   </Route>
// );

// Router.run(routes, (Handler) => {
//   React.render(<Handler/>, document.body);
// });

export default App;

