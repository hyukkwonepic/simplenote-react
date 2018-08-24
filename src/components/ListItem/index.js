import React from 'react';
import './index.css';

class ListItem extends React.Component {
  render() {
    return (
      <div className={this.props.active ? "list-item active" : "list-item"}>
        <div className="title">{this.props.title}</div>
        <div className="list-item-contents">{this.props.contents}</div>
      </div>
    );
  }
}

export default ListItem;