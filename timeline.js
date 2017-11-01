//to retweet from timeline
const config = require('./config');
const twit = require('twit');
const T = new twit(config);


T.get('statuses/home_timeline', {count: 5}, function(err, data, response){
  //writting to file to figure out what the heck is going on
          // var fs = require('fs');
          // var json = JSON.stringify(data,null,2);
          // fs.writeFile("tweet2.json", json);
          var tweet = data[Math.floor(Math.random() * data.length)];
          var text = tweet.text;
          console.log(text)
})
