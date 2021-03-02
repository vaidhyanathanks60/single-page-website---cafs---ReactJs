import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import AppHeader from './components/common/header';
import Home from './view/home';
import BaseFooter from './components/common/BaseFooter';


const { Header ,Content, Footer} = Layout;

function App() {
  return (
    <Layout className="mainLayout">
    <Header>
      <AppHeader />
    </Header>
    <Content>
      <Home/>
    </Content>
    <Footer>
      <BaseFooter />
    </Footer>
  </Layout>
    );
}

export default App;
