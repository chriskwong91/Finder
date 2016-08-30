var oauthSignature = require('oauth-signature');
var n = require('nonce')();
var request = require('request');
var qs = require('querystring');
var _ = require('lodash');
var Keys = require('./keys.js');

exports.requestYelp = (set_parameters, callback) => {
  var httpMethod = 'GET';

  var url = 'http://api.yelp.com/v2/search';

  /* We can setup default parameters here */
  var default_parameters = {
    location: 'San+Francisco',
    sort: '2'
  };

  /* We set the require parameters here */
  var required_parameters = {
    // oauth_consumer_key : Keys.oauth_consumer_key,
    oauth_consumer_key : 'HKGeUGhJubJ6U0fMMhCmVA',
    // oauth_token : Keys.oauth_token,
    oauth_token : 'j9j2J8XKVU445t26dvI9p1SJOyyDFDzp',
    oauth_nonce : n(),
    oauth_timestamp : n().toString().substr(0,10),
    oauth_signature_method : 'HMAC-SHA1',
    oauth_version : '1.0'
  };

  /* We combine all the parameters in order of importance */
  var parameters = _.assign(default_parameters, set_parameters, required_parameters);

  /* We set our secrets here */
  var consumerSecret = 'G0_spXJyBnLeMW6oA8oZfWFbD20';
  // var consumerSecret = Keys.consumerSecret;
  // var tokenSecret = Keys.tokenSecret;
  var tokenSecret = 'ZB4oYOfs0bWkl_9dVuwinvtE7vw';

  /* Then we call Yelp's Oauth 1.0a server, and it returns a signature */
  /* Note: This signature is only good for 300 seconds after the oauth_timestamp */
  var signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, { encodeSignature: false});

  /* We add the signature to the list of paramters */
  parameters.oauth_signature = signature;

  /* Then we turn the paramters object, to a query string */
  var paramURL = qs.stringify(parameters);

  /* Add the query string to the url */
  var apiURL = url+'?'+paramURL;

  /* Then we use request to send make the API Request */
  request(apiURL, function(error, response, body){
    return callback(error, response, body);
  });
};
