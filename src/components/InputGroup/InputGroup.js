// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import glamorous from 'glamorous';
import {getGender} from '../../lib/name'

type Props = {
  children?: Node,
};

function findingOut(name) {
  return getGender(name);
}

const StyledButton = glamorous.button({
  backgroundColor: 'light grey',
  padding: '10px',
  width: '20%'
})

const StyledInput = glamorous.input({
  padding: '10px',
  width: '80%'
})

class InputGroup extends Component<Props> {
  
  render() {
    return (
      <glamorous.Div width="50%" margin="10% auto 0" css={this.props.css}>
          <StyledInput type="text" placeholder="What does your name say about you..." value={this.state.value} onChange={this.handleChange}/>
          <StyledButton onClick={this.handleSubmit}>
            find out
          </StyledButton>
        </glamorous.Div>
        
    );
  }
}

export default InputGroup;
