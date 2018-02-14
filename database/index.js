const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// Default values... ?
let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  url: String, // Web url
  owner: {
    id: Number,
    username: String, // wat...
    profile: String, // the Gravatar picture
  },
  size: Number,
  stars: Number,
  watchers: Number,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (newRepo) => {
  (new Repo(newRepo)).save();
}

module.exports.save = save;
