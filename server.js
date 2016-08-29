//server.js
'use strict';

const express = require('express');
const app = express();

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.listen(3000);
console.log('Now listening on 3000...');
