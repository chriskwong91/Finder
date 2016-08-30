//server.js
'use strict';

const express = require('express');
const app = express();
let yelpRequest = require('./server/yelpRequest.js');

app.use('/static', express.static('public'));
app.use("/styles", express.static(__dirname + '/styles'));
app.use("/node_modules", express.static(__dirname + '/node_modules'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/yelp', (req, res) => {
  console.log('in server');
  let query = req.query;
  console.log(query);
  yelpRequest.requestYelp(query, (error, response, body) => {
    console.log('yelp request received!');
    if (error) {console.log(error)}
    res.send(body);
  });
});

app.listen(3000);
console.log('Now listening on 3000...');
