const config = require('./config');
const twit = require('twit');

const T = new twit(config);

function searchTwitter() {
  const params = {
    q: '#mueller',
    count: 5,
    result_type: ['recent', 'popular'],
    language: 'en'
  }
  T.get('search/tweets', params)
  .then(function(res){
    console.log(res.data.statuses);
  });
}

searchTwitter();
