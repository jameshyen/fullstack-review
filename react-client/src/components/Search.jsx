import React from 'react';

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      term: '',
    }
  }

  onChange (e) {
    this.setState({
      term: e.target.value,
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  enter(e) {
    if (e.key === 'Enter') {
      this.search();
    }
  }

  render() {
    return (
      <div>
        <h4>Add more repos!</h4>
        Enter a GitHub username: <input value={this.state.terms} onChange={this.onChange.bind(this)} onKeyPress={this.enter.bind(this)} />       
        <button onClick={this.search.bind(this)}>Add Repos</button>
      </div>
    );
  }
}

export default Search;
