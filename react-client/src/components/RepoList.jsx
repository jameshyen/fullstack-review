import React from 'react';
import Repo from './Repo.jsx';

const RepoList = ({ repos }) => (
  <div>
    <h4>Repo List Component</h4>
    There are {repos.length} repos.
    <table className="table">
      <thead>
        <tr>
          <th>Stars</th>
          <th>Repo</th>
          <th>Owner</th>
        </tr>
      </thead>
      <tbody>
        {repos.map((repo, index) => {
          return <Repo key={index} repo={repo} />;  
        })}
      </tbody>
    </table>
  </div>
);

export default RepoList;
