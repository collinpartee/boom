import React, { Component } from 'react'

class SubScreen3 extends Component {

  componentWillMount() {
    // this.props.eventEmitter.emit("navigateScreen", {screenIndex: 1})
  }

  render() {
    return (
      <div className="screen screen1">
        <h1>Screen C</h1>
      </div>
    )
  }

}

module.exports = SubScreen3
