import React from 'react';
import './index.css';

class ListItem extends React.Component {
  render() {
    return (
      <div className="list-item">
        <div className="title">제목</div>
        <div className="list-item-contents">내용 내용 내용 내용 내용 내용 </div>
      </div>
    );
  }
}

export default ListItem;