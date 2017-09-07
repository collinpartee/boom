// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import glamorous from 'glamorous';

type Props = {
  children?: Node,
};

const MySidebar = glamorous.div({
  backgroundColor: 'gray',
  height: '100%'
});

class Sidebar extends Component<Props> {
  render() {
    return (
      <MySidebar>
        {this.props.children}
        </MySidebar>
    );
  }
}

export default Sidebar;
