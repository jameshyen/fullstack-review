const request = require('request');
// const config = require('../config.js');

let getReposByUsername = (username) => {
  request(`https://api.github.com/users/${username}/repos`, function (error, response, body) {
    console.log(body);
  });
}

module.exports.getReposByUsername = getReposByUsername;

getReposByUsername('jameshyen');