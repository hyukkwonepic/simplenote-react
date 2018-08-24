import React from 'react';
import './index.css';
import ListItem from '../ListItem';

class List extends React.Component {
  render() {
    return (
      <div className="list">
        {this.props.notes.map((item) => {
          return (
            <ListItem
              key={item.id}
              id={item.id}
              active={item.id === this.props.activeNote}
              title={item.title}
              contents={item.contents}
              onClick={this.props.onListItemClick}
            />
          );
        })}
      </div>
    );
  }
}

export default List;