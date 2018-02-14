import React from 'react';

const Repo = ({ repo }) => (
  <li className="list-group-item">Name: {repo.name}, Owner: {repo.owner.username}, Stars: {repo.stars}</li>
);

export default Repo;
