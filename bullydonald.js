//this bot simply sends ot a tweet
const config = require('./config');
const twit = require('twit');
const T = new twit(config);

//get a random item so the tweets aren't the same thing every time 
const items = ['bag', 'sack', 'cauldron', 'box', 'bin', 'tray', 'case', 'bucket'] ;
const item = items[Math.floor(Math.random()*items.length)];

// this post actually posts the tweet using built in functions from Twit
function postTweet(url, params){
    return T.post(url, params, function(err){
      if(err){
        console.log('ohh shit something dun fucked up ', err);
        return;
      }
      console.log('fuck yeah it worked !')
    });
}

const newTweet = function(){
  return postTweet('statuses/update', {status: '@realdonaldtrump eat a' + item + ' of dcks'})
}

newTweet();
