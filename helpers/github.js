const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback, full = [], page = 1) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
    },
  };
  request(options, function (error, response, body) {
    console.log(body);
    const repos = JSON.parse(body);
    full = full.concat(repos);
    console.log(repos.length);
    if (repos.length === 100) {
      getReposByUsername(username, callback, full, page + 1);
    } else {
      callback(full);
    }
  });
}

module.exports.getReposByUsername = getReposByUsername;
