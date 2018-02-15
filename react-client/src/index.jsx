import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      repos: [],
    }
    this.fill();
  }

  search (term) {
    const App = this;
    $.ajax({
      method: 'POST',
      url: '/repos',
      contentType: 'application/json',
      data: JSON.stringify({term: term}),
      success(response) {
        alert(`Wow, aren't alerts so annoyi—GitHub user added: ${term}! They had ${JSON.parse(response).length} repos! Their highest amount of stars was ${JSON.parse(response).stars}!`)
        App.fill();
      },
      error(response) {
        alert(`Wow, you already added that person.`);
        App.fill();
      }
    });
  }

  fill () {
    const App = this;
    $.ajax({
      method: 'GET',
      url: '/repos',
      success(response) {
        App.setState({
          repos: JSON.parse(response),
        });
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
