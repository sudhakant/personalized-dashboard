'use strict';
var request = require('request');

require('dotenv').config();

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
// var url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=reliance&apikey=${process.env.API_KEY}`;
var url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=BAJAJFINSV.BSE&apikey=${process.env.API_KEY}`;

request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is successfully parsed as a JSON object:
      console.log(data);
    }
});