import React, { Component } from 'react';
import glamorous from 'glamorous';
import {
  NavLink,
} from 'react-router-dom'



class Sidebar extends Component {
  render() {

    const MySidebar = glamorous.div({
      backgroundColor: 'gray',
      height: 'auto',
      width: '5em',
      transform: this.props.toggle === 'open' ? 'translateX(-100%)' : 'translateX(0)'
    });
    
    const Nav = glamorous.ul({
      marginBottom: '0', 
      width: '100%',
    });

    const NavItem = glamorous.li({
      display: 'block', 
      padding: '.75em 1em', 
      cursor: 'pointer',
      marginBottom: '0',
    });
    const NavTitle = glamorous.li({
      display: 'block', 
      padding: '.75em 1em', 
      marginBottom: '0',
      textTransform: 'uppercase',
      fontSize: '13px'
    });

    return (
      <MySidebar className={`${this.props.columnSize} columns`} css={this.props.css}>
        
        {
          this.props.routes.map((route, i) => {
            if (this.props.location.pathname.indexOf(route.pathname) !== -1  && route.children){
              return (
              <Nav key={i}>
                <NavTitle>{route.name}</NavTitle>
                {
                  route.children.map((childLink, i) => {
                    return (
                      <NavItem key={i}>
                        <NavLink 
                          exact
                          to={`${this.props.match.url}${childLink.pathname}`}
                          activeStyle={{
                                        fontWeight: 'bold',
                                        color: 'red'
                                      }}  
                        >
                        {childLink.name}
                        </NavLink>
                      </NavItem>
                    )
                  })
                }
              </Nav>
            )
            }
          })
        }
        </MySidebar>
    );
  }
}

export default Sidebar;
