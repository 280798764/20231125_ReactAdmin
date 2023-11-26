import React from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {withRouter} from "react-router-dom";
import { Button, Checkbox, Form, Input } from 'antd';
import './index.less'

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    onFinish = () => {
        this.login()
    }
    login = () => {
        // e.preventDefault()
        // console.log(this.props, '00')
        this.props.history.push('/home')
    }
    render() {
        return (
            <div className='login'>
                <header className='header'>
                    header
                </header>
                <section className='content'>
                    <h1>用户登录</h1>
                    <div className="form">
                        {/* <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>

                            <Form.Item>
                                {/* <Button type="primary" onClick={this.login} className="login-button">登陆</Button> 
                            </Form.Item>
                        </Form>*/}

                        <Button type="primary" onClick={(e)=>this.login(e)} className="login-button">登陆</Button>
                        <p onClick={this.login.bind(this)}>登陆</p>
                    </div>

                </section>
            </div>
        );
    }
}

export default withRouter(Login);