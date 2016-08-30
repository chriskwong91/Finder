import LOCU_API_KEY from '../config/locu.js';

let getPictures = (options, callback) => {

  $.ajax({
      url: 'https://api.locu.com/v2/venue/search',
      data: {
        key: LOCU_API_KEY,
        fields: [],
      },
      dataType: 'json',
      success: function(response) {
        console.log('Successful GET request');

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
