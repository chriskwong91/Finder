import React from 'react';
import Router from 'react-router';
import App from './App.jsx';
import FavoriteList from './FavoriteList.jsx';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

let Nav = (props) => {
  return(
    <div>

    </div>
  );

};

      // <Link to='home'>Home</Link>
      // <Link to='favorites'>My Favorites</Link>
      // <RouteHandler/>
// let routes = (
//   <Route name='home' path='/' hander={App}>
//     <Route name='favorites' path='/favorites' handler={FavoriteList}/>
//   </Route>
// );

// // Router.run(routes, (handler) => {
// //   React.render(<Handler/>, document.body);
// // });

export default Nav;
