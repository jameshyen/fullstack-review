import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      repos: []
    }
  }

  search (term) {
    console.log(term);
    $.ajax({
      method: 'POST',
      url: '/repos',
      data: term,
      success() {

      },
    });
  }

  render () {
    return (
      <div>
        <h1>GitHub Fetcher</h1>
        <RepoList repos={this.state.repos} />
        <Search onSearch={this.search.bind(this)} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
