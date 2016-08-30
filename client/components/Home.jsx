import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Spacing</h1>
        <div className='container'>
          <h1>Welcome to Finder!</h1>
          <h3>Match with food that looks good...</h3>
          <img className='mainImage' src='http://images1.phoenixnewtimes.com/imager/u/745xauto/8039501/phxchinese-newhongkong05-ecarpenter.jpg'/>
        </div>
        <div className='container'>
          <h3>Top Restaurants</h3>
        </div>
      </div>
    );
  }
}

export default Home;


