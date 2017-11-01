const config = require('./config');
const twit = require('twit');
const T = new twit(config);
const I = require('./data/interests.js');





//this function searches twitter for our parameters
function searchTwitter() {
  var interest = Math.floor(Math.random()*I.interests.length);
  const params = {
    q: interest,
    count: 100,
    result_type: ['recent', 'popular'],
    language: 'en'
  }
  return T.get('search/tweets', params)
  .then(function(res){
    //we can either grab the first tweet
        // const tweet = res.data.statuses[0];
    //or we can grab a random one
    const tweet = res.data.statuses[Math.floor(Math.random() * res.data.statuses.length)];
    if(!tweet){
      throw new Error('No Status found');
    }
    return tweet;
  });
}

//this post actually posts the tweet using built in functions from Twit
function postTweet(url, params){
    return T.post(url, params, function(err){
      if(err){
        console.log('ohh shit something dun fucked up ', err);
        return;
      }
      console.log('fuck yeah it worked !')
    });
}

//this function grabs a tweet and reposts it
function searchAndPostTweet(url){
  return function(){
    return searchTwitter()
  .then(function(status){
    return postTweet(url, {id: status.id_str})
  })
  .catch(function(err){
    console.log("there is an error inside the search and PostTweet", err)
  });
}
}

const retweet = searchAndPostTweet('statuses/retweet/:id');
const favorite = searchAndPostTweet('favorites/create');

//new tweet function will eventually build an algorithm to make generic small talk i.e. so glad it's friday
          // const newTweet = function(){
          //   return postTweet('statuses/update', {status: 'what a world!'})
          // }
          // newTweet();


retweet();
// favorite();
