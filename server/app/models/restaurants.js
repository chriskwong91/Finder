// schema for restaurants
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let restaurantSchema = new Schema({
  name: String,
  city: String,
  zipcode: Number,
  imageUrl: String,
  meta: {
    upVotes: Number,
    totalVotes: Number,
  }
});

let Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
