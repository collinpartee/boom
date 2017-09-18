import React, { Component } from 'react';
import glamorous from 'glamorous';
import Results from '../Results/Results';


const MyContent = glamorous.div({
  // backgroundColor: 'white',
  color: 'black',
  
});


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Collin'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <MyContent css={this.props.css} className={this.props.className}>
        {this.props.children}
      </MyContent>
    );
  }
}

export default Content;