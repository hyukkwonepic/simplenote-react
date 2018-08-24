import React from 'react';
import './index.css';
import ListItem from '../ListItem';

class List extends React.Component {
  render() {
    return (
      <div className="list">
        {this.props.notes.map((item, index) => {
          return (
            <ListItem
              key={index}
              index={index}
              active={index === this.props.activeIndex}
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