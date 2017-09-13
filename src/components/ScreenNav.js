import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import glamorous from 'glamorous'

class ScreenNav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    
    const NavBar = glamorous.div({
      backgroundColor: 'black', 
      height: '100%', 
      display: 'flex', 
      alignItems: this.props.display ? 'flex-start' : 'center', 
      padding: this.props.display ? '' :  '0 15px'
    });

    const Ul = glamorous.ul({
      marginBottom: '0', 
      width: '100%',
    });

    const Li = glamorous.li({
      display: 'inline-flex', 
      padding: '0 15px', 
      cursor: 'pointer',
      marginBottom: '0',
    });

    return (
      <NavBar css={this.props.css}>
        {this.props.children}
        <Ul>
      {
        this.props.routes.map((route, i) => {
          return (
            <Li key={i}>
            <NavLink 
              to={route.pathname}
              activeStyle={{
                fontWeight: 'bold',
                color: 'rgba(255,255,255, 1)'
              }}
            >
              {route.name}
            </NavLink>
            </Li>)
          })
      }
    </Ul>        
      </NavBar>
    )
  }
}

module.exports = ScreenNav
