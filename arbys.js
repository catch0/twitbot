const config = require('./config');
const twit = require('twit');
const T = new twit(config);
const stream = T.stream('user');

//arbys bot will find references to horse dicks and recommend a trip to arbys in response
const params = {
  q: 'horse penis',
  count: 5
};

T.get('search/tweets', params, gotData);

 function gotData(err, data, response) {
   var tweets = data.statuses;
   for(var i = 0; i < tweets.length; i++){
     console.log(tweets[i].text);
   }
};
