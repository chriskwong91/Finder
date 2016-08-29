var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname + '/public/js',
    filename: 'react-app.js'
  },
  module: {
    loaders: [
    {
      test: /.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
};


