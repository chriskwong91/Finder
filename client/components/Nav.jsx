import React from 'react';
import Router from 'react-router';
import FavoriteList from './FavoriteList.jsx';
import { Link } from 'react-router';

let Nav = (props) => {
  return(
    <div>
        <div className="navbar navbar-default navbar-fixed-top">
          <div className='container'>
          <a className="navbar-brand" href="#">Finder</a>
          <Link to='/'><p className="navbar-brand">Home</p></Link>
          <Link to='rate'><p className="navbar-brand">Food Swiping</p></Link>
          <Link to='favorites'><p className="navbar-brand">My Favorites</p></Link>
          <button type="button" className="btn btn-default navbar-btn navbar-right">Sign in</button>
          </div>
        </div>
    </div>
  );

};



export default Nav;
