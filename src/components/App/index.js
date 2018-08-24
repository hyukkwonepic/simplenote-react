import React from 'react';
import './index.css';
import Header from '../Header';
import List from '../List';
import Note from '../Note';

class App extends React.Component {
  state = {
    notes: [
      {
        id: 1,
        title: '무슨 일 이세요?',
        contents: '안녕하세요? 안녕하세요? 안녕하세요? 안녕하세요? 안녕하세요? 안녕하세요? '
      },
      {
        id: 2,
        title: '오예',
        contents: '허쉬초콜릿 드링크는 너무나 맛있어!'
      }
    ],
    activeNote: 1
  }

  handleListItemClick = (id) => {
    this.setState({
      activeNote: id
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <List
            notes={this.state.notes}
            activeNote={this.state.activeNote}
            onListItemClick={this.handleListItemClick}
          />
          <Note note={this.state.notes.filter((item) => item.id === this.state.activeNote)[0]}/>
        </div>
      </div>
    );
  }
}

export default App;