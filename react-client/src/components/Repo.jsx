import React from 'react';

const Repo = ({ repo }) => (
  <tr>
    <td>{repo.stars}</td>
    <td><a href={repo.url} target="_blank">{repo.name}</a></td>
    <td>{repo.owner.username}</td>
  </tr>
);

export default Repo;
