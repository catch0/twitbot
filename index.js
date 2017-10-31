const config = require('./config');
const twit = require('twit');

const T = new twit(config);

function searchTwitter() {
  const params = {
    q: '@WillFisher4Cong',
    count: 5,
    result_type: ['recent', 'popular'],
    language: 'en'
  }
  T.get('search/tweets', params)
  .then(function(res){
    const tweet = res.data.statuses[0];
    if(!tweet){
      throw new Error('No Status found');
    }

    const params = {id: tweet.id_str};
    console.log(params);
  });
}

searchTwitter();
