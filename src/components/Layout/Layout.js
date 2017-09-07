import '../../styles/skeleton.css';
// ^ maybe want to delete eventually
import React, {Component} from 'react';
import Container from '../LayoutComponents/Container/Container';
import Row from '../LayoutComponents/Row/Row';
import HeaderFooter from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import glamorous from 'glamorous';

const MyApp = glamorous.div({margin: 'auto', backgroundColor: '#fff', color: '#444', backgroundSize: 'cover', overflowY: 'hidden'});

const NavBar = glamorous.div({backgroundColor: 'coral', height: '100%'})

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarIs: 'open'
    }
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState({sidebarIs: this.state.sidebarIs === 'open' ? 'closed' : 'open'});
    console.log('sidebar is: ', this.state.sidebarIs)
  }
  render() {
    return (
      <MyApp>
        <Container css={{height: '100vh'}}>
          <Row>
            <HeaderFooter className='twelve columns' css={{height: '10vh'}}>
              <NavBar>
                <button onClick={this.toggleSidebar}>Open</button>
              </NavBar>
            </HeaderFooter>
          </Row>

          <Row css={{marginLeft: this.state.sidebarIs === 'open' ? '-22%' : '0'}}>
            
             <Sidebar columnSize='three'  toggle={this.state.sidebarIs} css={{height: '85vh'}}> Sidebar Here </Sidebar>
           <Container>
           <Content className='two columns'>
              Content Content Content
            </Content>
            <glamorous.Div className='two columns'>
              Bompton Bompton Bompton
            </glamorous.Div>
            <glamorous.Div className='three columns'>
              City City City
            </glamorous.Div>
            <glamorous.Div className='one column'>
              YMCMB YMCMB YMCMB
            </glamorous.Div>

           </Container>
           
          </Row>

          <Row>
            <HeaderFooter className='twelve columns' css={{position: 'absolute', bottom: '0', width: '100%', height: '5vh'}}>
              <p>Collin made this</p>
            </HeaderFooter>
          </Row>
        </Container>

      </MyApp>
    );
  }
}

export default Layout;
