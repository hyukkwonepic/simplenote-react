import React from 'react';
import './index.css';

class ListItem extends React.Component {
  render() {
    const { active, title, contents, onClick } = this.props;
    return (
      <div
        className={active ? "list-item active" : "list-item"}
        onClick={onClick}
      >
        <div className="title">{title ? title : '제목'}</div>
        <div className="list-item-contents">{contents ? contents : '내용'}</div>
      </div>
    );
  }
}

export default ListItem;