import React from 'react';
import './index.css';

class Note extends React.Component {
  render() {
    return (
      <div className="note">
        <input
          className="title"
          value={this.props.note.title}
          onChange={(e) => this.props.onEditNote('title', e)}
        />
        <textarea
          className="note-contents"
          value={this.props.note.contents}
          onChange={(e) => this.props.onEditNote('contents', e)}
        />
      </div>
    );
  }
}

export default Note;