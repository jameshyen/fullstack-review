const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  url: String,
  owner: {
    id: Number,
    username: String,
    profile: String,
  },
  size: Number,
  stars: Number,
  watchers: Number,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (newRepo) => {
  (new Repo(newRepo)).save();
}

module.exports.Repo = Repo;
module.exports.save = save;
