import React from 'react';
import './index.css';

class Header extends React.Component {
  render() {
    const { onAddNote, onDeleteNote } = this.props;
    return (
      <div className="header">
        Header
      </div>
    );
  }
}

export default Header;