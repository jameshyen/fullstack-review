const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { Repo, save } = require('../database/index');
const { getReposByUsername } = require('../helpers/github');

let app = express();
app.use(morgan('tiny'));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/repos', function (req, res) {
  Repo.find({'owner.username': req.body.term}, function (error, repos) {
    if (repos.length === 0) {
      getReposByUsername(req.body.term, function (repos) {
        for (repo of repos) {
          // Mapping is slightly different so can't just paste in repo...
          save({
            id: repo.id,
            name: repo.name,
            url: repo.html_url,
            owner: {
              id: repo.owner.id,
              username: repo.owner.login, // ...
              profile: repo.owner.avatar_url,
            },
            size: repo.size,
            stars: repo.stargazers_count,
            watchers: repo.watchers_count,
          });
        }
      });
      res.status(201).end('User saved!');
    } else {
      // What if we want to update that user...
      res.status(409).end('User has already been searched!')
    }
  });
});

app.get('/repos', function (req, res) {
  console.log(req.body);
  res.end();
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
