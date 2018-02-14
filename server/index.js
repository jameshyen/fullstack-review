const express = require('express');
const parser = require('body-parser');
const { save } = require('../database/index');
const { getReposByUsername } = require('../helpers/github');

let app = express();
app.use(parser.urlencoded());

app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/repos', function (req, res) {
  console.log('in here');
  console.log(req.body);
  res.end();
});

app.get('/repos', function (req, res) {
  console.log(req.body);
  res.end();
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
