import '../../../styles/skeleton.css';
// ^ maybe want to delete eventually
import React, {Component} from 'react';
import glamorous from 'glamorous';



const StyledContainer = glamorous.div({
  backgroundColor: '#fff',
  color: '#444',
});


class Container extends Component {
  render() {
    return (
      <StyledContainer className='container' css={this.props.css}>
        {this.props.children}
      </StyledContainer>
    );
  }
}

export default Container;
