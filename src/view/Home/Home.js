import '../../styles/skeleton.css';
// ^ maybe want to delete eventually
import React, {Component} from 'react';
import Layout from '../../components/Layout/Layout'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Content from '../../components/Content/Content'

class Home extends Component {
  render() {
    return (
       <Layout header={Header} sidebar={Sidebar} main={Content} footer={Header} />
    );
  }
}

export default Home;
