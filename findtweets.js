// bot will find tweets that mention American Horror Story and log the text to the console
const config = require('./config');
const twit = require('twit');
const T = new twit(config);
const stream = T.stream('user');

//grabs a tween when the name michael burgess is mentioned
const params = {
  q: "\"Michael Burgess\"",
  count: 20,
  language: 'en'
};
// grabs a tweet when his handle is actually mentioned
const params2 = {
  q: "@michaelcburgess",
  count: 10,
  language: 'en'
};
// grabs tweets when someone says linsey is running against burgess
const params3 = {
  q: "@linseyfagantx is running against",
  count: 5,
  language: 'en'
};

T.get('search/tweets', params3, gotData);


 function gotData(err, data, response) {
   var tweets = data.statuses;
   for(var i = 0; i < tweets.length; i++){
     console.log(tweets[i].text);
     console.log("/br")
   }
};
