import React from 'react';
import './index.css';
import Header from '../Header';
import List from '../List';
import Note from '../Note';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <List />
          <Note />
        </div>
      </div>
    );
  }
}

export default App;