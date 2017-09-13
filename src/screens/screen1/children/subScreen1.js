import React, { Component } from 'react'

class SubScreen1 extends Component {

  componentWillMount() {
    // this.props.eventEmitter.emit("navigateScreen", {screenIndex: 1})
  }

  render() {
    return (
      <div className="screen screen1">
        <h1>Screen A</h1>
      </div>
    )
  }

}

module.exports = SubScreen1
