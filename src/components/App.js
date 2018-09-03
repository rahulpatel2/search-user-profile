import React, { Component } from 'react';
import SearchBox from './SearchBox'
import SearchResult from './SearchResult'

class App extends Component {
  render() {
    return (
      <div>
        <SearchBox />
        <SearchResult />
      </div>
    );
  }
}

export default App;
