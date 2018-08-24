import React from 'react';
import './index.css';

class Note extends React.Component {
  render() {
    return (
      <div className="note">
        <div className="title">제목</div>
        <div className="note-contents">컨텐츠</div>
      </div>
    );
  }
}

export default Note;