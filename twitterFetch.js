const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: "4bdDFG0KxEglAbtWF6OSCfBs8",
  consumer_secret: 'O92IEcF51sr90GRkR3rKRmvRn4OU9KscUEettPg6PiIAqSU6e5',
  access_token_key: '986614633632059392-pE3kNdnQW6nrZAxAYspnZKnsSaUY8uK',
  access_token_secret: 'bAObcgr3yaegwcN3BaCQs5wIR3wDXoE6qk5A73hOn4KW6'
});


function fetchTweets(search) {
  const params = {
    q: search,
    exclude: 'retweets',
    count: 100,
    lang: 'en',
    tweet_mode: 'extended'
  }
  return new Promise(function (resolve, reject) {
    client.get('search/tweets', params, function (error, tweets, response) {
      resolve(tweets)
    })
  })
}

module.exports = fetchTweets
