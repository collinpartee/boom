import React, { Component } from 'react'

class SubScreen2 extends Component {

  componentWillMount() {
    // this.props.eventEmitter.emit("navigateScreen", {screenIndex: 1})
  }

  render() {
    return (
      <div className="screen screen1">
        <h1>Screen B!</h1>
      </div>
    )
  }

}

module.exports = SubScreen2
