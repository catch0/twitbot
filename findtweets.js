// bot will find tweets that mention American Horror Story and log the text to the console
const config = require('./config');
const twit = require('twit');
const T = new twit(config);
const stream = T.stream('user');


const params = {
  q: 'AHS',
  count: 5
};

T.get('search/tweets', params, gotData);

 function gotData(err, data, response) {
   var tweets = data.statuses;
   for(var i = 0; i < tweets.length; i++){
     console.log(tweets[i].text);
   }
};
