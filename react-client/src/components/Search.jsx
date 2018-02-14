import React from 'react';

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      term: ''
    }
    console.log(this, props);
  }

  onChange (e) {
    console.log(this);
    this.setState({
      term: e.target.value
    });
  }

  search() {
    console.log(this);
    // this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div>
        <h4>Add more repos!</h4>
        Enter a GitHub username: <input value={this.state.terms} onChange={this.onChange.bind(this)} />       
        <button onClick={this.search.bind(this)}> Add Repos </button>
      </div>
    );
  }
}

export default Search;
