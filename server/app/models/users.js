const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({

  username: String,
  password: String,
  meta: {
    upVoted: [{
      name: String,
    }],
    downVoted: [{
      name: String,
    }]
  }
});


let User = mongoose.model('User', userSchema);

module.exports = User;
