import React from 'react';
import './index.css';
import ListItem from '../ListItem';

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    );
  }
}

export default List;