import React from 'react';
import Repo from './Repo.jsx';

const RepoList = ({ repos }) => (
  <div>
    <h4>Repo List Component</h4>
    There are {repos.length} repos.
    <ul>
      {repos.map((repo) => {
        return <Repo repo={repo} />;  
      })}
    </ul>
  </div>
);

export default RepoList;
