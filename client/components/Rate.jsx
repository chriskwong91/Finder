import React from 'react';
let $ = require('jquery');

class Rate extends React.Component {
  constructor(props) {
    super(props);

  }

  makeYelpRequest() {
    console.log('making request');
    $.ajax({
      url: 'http://localhost:3000/yelp',
      type: 'GET',
      data: {
        term: 'restaurant'},
      contentType: 'application/json',
      success: (data) => {
        var restaurants = JSON.parse(data);
        console.log('Success Post!', restaurants, typeof restaurants);
      },
      error: (error) => {
        console.log('There was an Error:', error);
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Spacing</h1>
        <div className='container'>
        <h1 onClick={this.makeYelpRequest}>Food</h1>
        </div>
      </div>
    );
  }
}

export default Rate;
