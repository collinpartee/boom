import '../../styles/skeleton.css';
// ^ maybe want to delete eventually
import React, {Component} from 'react';
import HeaderFooter from '../Header/Header';
import Content from '../Content/Content';
import glamorous from 'glamorous';



const MyApp = glamorous.div({
  margin: 'auto',
  backgroundColor: '#fff',
  color: '#444',
  backgroundSize: 'cover', 
});

const NavBar = glamorous.div({
  width: '100%',
  height: '5em',
  backgroundColor: 'coral',
})

class Layout extends Component {
  render() {
    return (
      <MyApp className='container'>
        
        <div className="row">
        <HeaderFooter className='twelve columns'>
          <NavBar>  Nav Nav Nav </NavBar>
        </HeaderFooter>
        </div>
        
        <div className="row">
          <glamorous.Div className='four columns'>
            Sidebar here
            </glamorous.Div >
        <Content className='two columns'> Content Content Content</Content>
        <glamorous.Div className='two columns'> Bompton Bompton Bompton</glamorous.Div>
        <glamorous.Div className='three columns'> City City City</glamorous.Div>
        <glamorous.Div className='one column'> YMCMB YMCMB YMCMB</glamorous.Div>
        </div>
        
        <div className="row">
        <HeaderFooter className='twelve columns'>
          <p>Collin made this</p>
        </HeaderFooter>
        </div>
      </MyApp>
    );
  }
}

export default Layout;
