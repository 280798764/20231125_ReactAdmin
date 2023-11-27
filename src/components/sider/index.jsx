import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined,  } from '@ant-design/icons';
import { BrowserRouter, Route, Routes, Switch, Link } from "react-router-dom";
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
getItem('首页', 'sub0', <MailOutlined />),
  getItem('demo', 'sub4', <SettingOutlined />, [
    getItem('echarts', '1'),
    getItem('table', '2'),
  ]),
];
const App = (props) => {
  const [current, setCurrent] = useState('1');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    // props.setRouter(e)
  };
  return (
    <>
      <Menu
        theme={'dark'}
        onClick={onClick}
        style={{
        //   width: 256,
        }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </>
  );
};
export default App;