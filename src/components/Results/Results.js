// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import glamorous from 'glamorous';

type Props = {
  children?: Node,
};
const ResultContainer = glamorous.div({
  backgroundColor: 'rgba(0,0,0,.5)',
  color: 'white'
});

class Header extends Component<Props> {
  render() {
    return (
    
         <ResultContainer css={this.props.css}>
           {this.props.result}
         </ResultContainer>
        
    );
  }
}

export default Header;
