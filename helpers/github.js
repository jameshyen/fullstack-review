const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
    },
  };
  request(options, function (error, response, body) {
    // Ok...
    console.log(JSON.parse(body));
  });
}

module.exports.getReposByUsername = getReposByUsername;

getReposByUsername('jameshyen');