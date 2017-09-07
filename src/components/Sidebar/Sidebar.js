import React, { Component } from 'react';
import glamorous from 'glamorous';



class Sidebar extends Component {
  render() {

    const MySidebar = glamorous.div({
      backgroundColor: 'gray',
      height: 'auto',
      width: '5em',
      transform: this.props.toggle === 'open' ? 'translateX(-100%)' : 'translateX(0)'
    });

    return (
      <MySidebar className={`${this.props.columnSize} columns`} css={this.props.css}>
        {this.props.children}
        </MySidebar>
    );
  }
}

export default Sidebar;
