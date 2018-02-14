const express = require('express');
const parser = require('body-parser');
const { Repo, save } = require('../database/index');
const { getReposByUsername } = require('../helpers/github');

let app = express();
app.use(parser.json());

app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/repos', function (req, res) {
  Repo.find({owner: {username: req.body.term}}, function (error, repos) {
    if (repos.length === 0) {
      getReposByUsername(req.body.term, function (repos) {
        for (repo of repos) {
          save({
            id: repo.id,
            name: repo.name,
            url: repo.html_url,
            owner: {
              id: repo.owner.id,
              username: repo.owner.username, // ...
              profile: repo.owner.avatar_url,
            },
            size: repo.size,
            stars: repo.stargazers_count,
            watchers: repo.watchers_count,
          });
        }
      });
    } else {
      res.status(409).end('User has already been searched!') // What if we want to update that user...
    }
  });
  console.log('in here');
  console.log(req.body);
  // res.end();
});

app.get('/repos', function (req, res) {
  console.log(req.body);
  res.end();
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
