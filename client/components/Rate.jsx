import React from 'react';
import ImageViewer from './RateImageView.jsx';
let $ = require('jquery');

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7RQUJeMLF-yi1GlDZvdxYOOLnlnfQkDEW_hs6mcG2xudPFH5Hg'},
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
      console.log('changing locations');
      this.makeYelpRequest(94547);
    }
  }

  handleRight () {
    console.log('Feed Me!');
    this.changePicture();
  }

  handleLeft() {
    console.log('Garbage!');
    this.changePicture();
  }

  render() {
    return (
      <div className='container text-center col-md-4 col-md-offset-4'>
        <h1>Spacing</h1>
        <form onSubmit={this.makeYelpRequest}>
          <input value={this.state.query} onChange={this.handleChange.bind(this)} type='text' placeholder='Enter Location'/>
          <button>Submit</button>
        </form>
        <div className='row vertical-center-row'>
        <h1 onClick={this.makeYelpRequest}>Yum?</h1>
        </div>
        <div onClick={this.changePicture} className='picture'>
          <ImageViewer imageUrl={this.state.current.image_url} />
        </div>
        <div className='top-buffer'>
          <button onClick={this.handleLeft.bind(this)} className="butspace btn btn-danger">Garbage</button>

          <button onClick={this.handleRight.bind(this)} className='butspace btn btn-success'>Feed Me!</button>
        </div>
      </div>
    );
  }
}

export default Rate;
