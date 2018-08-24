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
              active={item.id === this.props.activeNote}
              title={item.title}
              contents={item.contents}
            />
          );
        })}
      </div>
    );
  }
}

export default List;