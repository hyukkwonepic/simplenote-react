import React from 'react';
import './index.css';
import Header from '../Header';
import List from '../List';
import Note from '../Note';

class App extends React.Component {
  state = {
    notes: [
      {
        title: '무슨 일 이세요?',
        contents: '안녕하세요? 안녕하세요? 안녕하세요? 안녕하세요? 안녕하세요? 안녕하세요? '
      },
      {
        title: '오예',
        contents: '허쉬초콜릿 드링크는 너무나 맛있어!'
      }
    ],
    activeIndex: 0
  }

  handleListItemClick = (id) => {
    this.setState({
      activeIndex: id
    });
  }

  handleAddNote = () => {
    const index = this.state.notes.length;
    this.setState({
      notes: [
        ...this.state.notes,
        {
          title: '제목',
          contents: '내용',
        },
      ],
      activeIndex: index
    });
  }

  handleDeleteNote = () => {
    const notes = this.state.notes.filter((item, index) => index !== this.state.activeIndex);
    this.setState({
      notes,
      activeIndex: 0,
    });
  }

  render() {
    return (
      <div className="app">
        <Header
          onAddNote={this.handleAddNote}
          onDeleteNote={this.handleDeleteNote}
        />
        <div className="container">
          <List
            notes={this.state.notes}
            activeIndex={this.state.activeIndex}
            onListItemClick={this.handleListItemClick}
          />
          <Note note={this.state.notes.filter((item, index) => index === this.state.activeIndex)[0]}/>
        </div>
      </div>
    );
  }
}

export default App;