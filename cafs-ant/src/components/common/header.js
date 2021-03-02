import React from 'react';
import {Menu} from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => console.log(value);

function AppHeader(){
    return( 
        <div className="container-fluid">
            <div className="header" >
            <div className="logo" >
                <a href="http://www.google.com">CaFS~money </a>
            <Space direction="vertical">
                <Search
                     placeholder="Search Mutual Funds"
                     enterButton="Search"
                     size="large"
                     suffix={suffix}   
                     onSearch={onSearch}
                />
             </Space>
            </div>    
            
        <Menu  mode="horizontal" defaultSelectedKeys={['1']}>   
        <Menu.Item key="Explore Funds"><h3>Explore Funds</h3></Menu.Item>
        <Menu.Item key="Compare Funds"><h3>Compare Funds</h3></Menu.Item>
        <Menu.Item key="Calculator"><h3>Calculator</h3></Menu.Item>
        <Menu.Item key="Learn more bout MF's"><h3>Learn more bout MF's</h3></Menu.Item>
        <Menu.Item key="Login"><h3>Login</h3></Menu.Item>
      </Menu> 
            </div>
        </div>
     );
}

export default AppHeader;