import React from 'react';
import './index.css';
import Header from '../Header';
import List from '../List';
import Note from '../Note';
import { generateId } from '../../utils';

class App extends React.Component {
  state = {
    notes: [
      {
        id: 'initial',
        title: '심플노트에 오신것을 환영합니다!',
        contents: '차근차근 만들면서 리액트를 익혀보세요! 👻\n\n헤더의 추가 버튼을 클릭하여 새로운 노트를 만드실 수 있습니다.'
      }
    ],
    activeId: 'initial'
  }

  handleListItemClick = (id) => {
    this.setState({ activeId: id });
  }

  handleAddNote = () => {
    const id = generateId();
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id,
          title: '제목',
          contents: '내용',
        },
      ],
      activeId: id,
    });
  }

  handleDeleteNote = () => {
    const notes = this.state.notes.filter((item) => item.id !== this.state.activeId);
    this.setState({
      notes,
      activeId: notes.length === 0 ? null : notes[0].id,
    });
  }

  handleEditNote = (type, e) => {
    const notes = [ ...this.state.notes ];
    const note = notes.find((item) => item.id === this.state.activeId)
    note[type] = e.target.value;
    this.setState({
      notes,
    });
  }

  render() {
    const { notes, activeId } = this.state;
    const activeNote = notes.filter((item) => item.id === activeId)[0];
    return (
      <div className="app">
        <Header
          onAddNote={this.handleAddNote}
          onDeleteNote={this.handleDeleteNote}
        />
        <div className="container">
          <List
            notes={notes}
            activeId={activeId}
            onListItemClick={this.handleListItemClick}
          />
          {
            notes.length !== 0 && <Note note={activeNote} onEditNote={this.handleEditNote} />
          }
        </div>
      </div>
    );
  }
}

export default App;