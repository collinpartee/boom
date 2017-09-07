import React, { Component } from 'react';
import glamorous from 'glamorous';

const StyledHeader = glamorous.div({
  backgroundColor: '#222',
  color: 'white',
  width: '100%',
});

class Header extends Component {
  render() {
    return (
        <StyledHeader css={this.props.css}>
         {this.props.children}
        </StyledHeader>
        
    );
  }
}

export default Header;
