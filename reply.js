const config = require('./config');
const twit = require('twit');
const T = new twit(config);
const stream = T.stream('user');


const params = {
  q: 'horse penis',
  count: 2
};

T.get('search/tweets', params, gotData);

 function gotData(err, data, response) {
  console.log(data);
};
