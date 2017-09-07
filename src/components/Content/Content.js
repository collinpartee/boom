import React, { Component } from 'react';
import glamorous from 'glamorous';
import Results from '../Results/Results';
import {getGender} from '../../lib/name'


const MyContent = glamorous.div({
  // backgroundColor: 'white',
  color: 'black',
  
});


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Collin'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  async handleSubmit(event) {
    try {
    const nameGender = await getGender(this.state.value);
    console.log(nameGender)
    let data = [];
    data.push(nameGender.data.gender);
    data.push(nameGender.data.name);
    data.push(nameGender.data.probability);
    console.log(data);
    this.setState({result: data});
    }
    catch(e) {
      console.log('Error: ', e);
    }
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