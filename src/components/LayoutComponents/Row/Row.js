import '../../../styles/skeleton.css';
// ^ maybe want to delete eventually
import React, {Component} from 'react';
import glamorous from 'glamorous';



const StyledRow = glamorous.div({
  backgroundColor: '#fff',
  color: '#444',
  display: 'flex',
  transition: '0.5s all ease'
});


class Row extends Component {
  render() {
    return (
      <StyledRow className='row' css={this.props.css}>
        {this.props.children}
      </StyledRow>
    );
  }
}

export default Row;
