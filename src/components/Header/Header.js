// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import glamorous from 'glamorous';

type Props = {
  children?: Node,
};
const StyledHeader = glamorous.div({
  backgroundColor: '#222',
  color: 'white',
  width: '100%',
  height: '100%'
});

class Header extends Component<Props> {
  render() {
    return (
        <StyledHeader css={this.props.css}>
         {this.props.children}
        </StyledHeader>
        
    );
  }
}

export default Header;
