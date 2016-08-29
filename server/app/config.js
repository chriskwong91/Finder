// intiates the MongoDB database

let mongoose = require('mongoose');
let db = mongoose.connection;

db.on('error', console.error);
db.once('open', () => {
  console.log('Connected to Mongoose!');
});

mongoose.connect('mongodb://localhost/finder');

module.exports = db;
