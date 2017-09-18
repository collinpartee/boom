import React, { Component } from 'react'

class Screen2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      etherPrices: []
    }
  }

  componentWillMount() {
    // this.props.eventEmitter.emit("navigateScreen", {screenIndex: 2})
  }

  render() {

    return (
      <div className="screen screen2">
        <h1>SCREEN 2 DATA</h1>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          
          </tbody>
        </table>
      </div>
    )
  }

}







module.exports = Screen2
