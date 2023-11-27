import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Table from '../pages/Table';
import Home from '../pages/Home';
import Echarts from '../pages/Echarts';

const { Sider, Content } = Layout;

const Abc = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200}>
        <Menu theme="dark" mode="vertical" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.SubMenu key="2" title="Demo">
            <Menu.Item key="2.1">
              <Link to="/demo/echarts">Echarts</Link>
            </Menu.Item>
            <Menu.Item key="2.2">
              <Link to="/demo/table">Table</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '16px' }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/demo/echarts" exact component={Echarts} />
            <Route path="/demo/table" exact component={Table} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Abc;
