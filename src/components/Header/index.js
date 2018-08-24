import React from 'react';
import './index.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="title">Alex's 심플노트</div>
        <div className="buttons">
          <button onClick={this.props.onAddNote}>추가</button>
          <button onClick={this.props.onDeleteNote}>삭제</button>
        </div>
      </div>
    );
  }
}

export default Header;