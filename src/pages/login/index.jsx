// src/pages/Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';

const Login = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);


    // 模拟登录成功
    setTimeout(() => {
      setLoading(false);
      message.success('登录成功');
      // 跳转到首页
      history.push('/');
    }, 1000);
  };

  return (
    <div style={{ width: 300, margin: 'auto', marginTop: 100 }}>
      <Form onFinish={onFinish}>
        <Form.Item
          name="username"
        >
          <Input placeholder="用户名" />
        </Form.Item>
        <Form.Item
          name="password"
        >
          <Input.Password placeholder="密码" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
