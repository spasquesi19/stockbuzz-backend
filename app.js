const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const twitterFetch = require('./twitterFetch')

const api_key = 'GzQxwboKx3Nwv6rCfzFx';

var sentiment_map;

app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.get('/twitter', function (req, res) {
  const search = req.param('name')
  twitterFetch(search).then(function (results){
    res.status(200).send(results)
  })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});