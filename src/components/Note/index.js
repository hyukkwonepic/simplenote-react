import React from 'react';
import './index.css';

class Note extends React.Component {
  render() {
    return (
      <div className="note">
        <div className="title">{this.props.note.title}</div>
        <div className="note-contents">{this.props.note.contents}</div>
      </div>
    );
  }
}

export default Note;