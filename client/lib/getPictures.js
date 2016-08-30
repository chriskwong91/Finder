// import LOCU_API_KEY from '../config/locu.js';
LOCU_API_KEY = ce8a6d39625b8c95f4291ae7180f6d980aa784eb;

let getPictures = (location, callback) => {

  $.ajax({
      url: 'https://api.yelp.com/v2/search',
      data: {
        oauth_consumer_key: 'HKGeUGhJubJ6U0fMMhCmVA',
        oauth_token: 'j9j2J8XKVU445t26dvI9p1SJOyyDFDzp',
        oauth_signature_method: 'hmac-sha1',
        oauth_signature: 'ZB4oYOfs0bWkl_9dVuwinvtE7vw',
        oauth_timestamp: Date.now(),
        oauth_nonce: 'asdfaefwq',
        term: 'restaurants',
        radius_filter: 7000,
        location: 'San Fransisco',
        limit: 50,
      },
      method: 'GET',
      dataType: 'application/json',
      success: function(response) {
        console.log('Successful GET request');
        console.log(response);

        if(callback) {
          callback(response);
        }
      },
      error: function(error) {
        console.log('There was an error with the request', error);
      }
    });
};

export default getPictures;
