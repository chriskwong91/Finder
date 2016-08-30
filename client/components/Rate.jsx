import React from 'react';
import ImageViewer from './RateImageView.jsx';
let $ = require('jquery');

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {image_url: 'http://www.greatwesternfoods.net/images/slideshow/01.jpg'},
      query: '',
    };
    this.restaurants = [];
    this.makeYelpRequest = this.makeYelpRequest.bind(this);
    this.changePicture = this.changePicture.bind(this);

  }

  componentDidMount() {
    console.log('making request');
    this.makeYelpRequest();
    console.log(this.restaurants);
  }
  makeYelpRequest(location) {
    var restaurants = this.restaurants;
    var businessess;
    console.log('quer', this.state.query);

    if (this.state.query === '') {
      location = location || 94102;
    } else {
      location = this.state.query;
    }

    $.ajax({
      url: 'http://localhost:3000/yelp',
      type: 'GET',
      data: {
        term: 'restaurant',
        location: location},
      contentType: 'application/json',
      success: (data) => {
        var dat = JSON.parse(data);
        // console.log('Success Post!', dat);
        this.restaurants = dat.businesses;
        // console.log(this.restaurants);
      },
      error: (error) => {
        console.log('There was an Error:', error);
      }
    });
    // console.log(this);
  }

  search(e) {
    console.log(e, e.target, e.value)

  }

  handleChange(event) {
    console.log(event, event.target.value);
    this.setState({query: event.target.value});
  }

  changePicture() {
    var random = Math.floor(Math.random() * this.restaurants.length);
    console.log('random number', random);
    this.setState({
      current: this.restaurants[random],
    });
    this.restaurants.splice(random, 1);
    if (this.restaurants.length === 0) {
      console.log('chaning locations');
      this.makeYelpRequest(94547);
    }
  }

  render() {
    return (
      <div>
        <h1>Spacing</h1>
        <form onSubmit={this.makeYelpRequest}>
          <input value={this.state.query} onChange={this.handleChange.bind(this)} type='text' placeholder='Enter Location'/>
          <button>Submit</button>
        </form>
        <div className='container'>
        <h1 onClick={this.makeYelpRequest}>Food</h1>
        </div>
        <div onClick={this.changePicture} className='picture'>
          <ImageViewer imageUrl={this.state.current.image_url} />
        </div>
      </div>
    );
  }
}

export default Rate;
