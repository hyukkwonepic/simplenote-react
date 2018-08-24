import React from 'react';
import './index.css';

class ListItem extends React.Component {
  render() {
    return (
      <div
        className={this.props.active ? "list-item active" : "list-item"}
        onClick={() => this.props.onClick(this.props.index)}
      >
        <div className="title">{this.props.title ? this.props.title : '제목'}</div>
        <div className="list-item-contents">{this.props.contents ? this.props.contents : '내용'}</div>
      </div>
    );
  }
}

export default ListItem;