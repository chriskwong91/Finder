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
    // this.state = {
    //   currentPage: this.props.children,
    // }
    // this.getNav = this.getNav.bind(this);
  }

  // getNav(page) {
  //   this.setState({
  //     currentPage : page
  //   });
  // }
  render() {
    return (
      <div>
        <Nav />
        <div className='container'>{this.props.children}</div>
      </div>
    );
  }
}


export default App;

