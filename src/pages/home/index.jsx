import React from "react";
import { BrowserRouter, Route, Routes, Switch, Link } from "react-router-dom";
import { Layout, Space } from 'antd';
import Slider from "../../components/sider";
import Table from '../../pages/table';
import Login from '../../pages/login/';
import PageHome from '../../pages/home';
import Echarts from '../../pages/echarts';
import './index.less';


console.log(Login, 'login===')

const { Header, Footer, Sider, Content } = Layout;
class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}

    setRouter = (params) => {
        // this.props.history.push(params.key)
        console.log('parsm', params)
        return <Link to={params.key}/>
    }

    render() {
        return (
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <Header className="headerStyle">Header</Header>
                    <Layout hasSider style={{ height: 'vh100%' }}>
                        <Sider className="siderStyle">
                            <Slider setRouter={this.setRouter}>

                            </Slider>
                        </Sider>
                        <Content className="contentStyle">
                            <div>888</div>
                            <Switch>
                                <Route path="/table" exact component={Table}></Route>
                                <Route path="/echarts" component={Echarts}></Route>
                            </Switch>
                            
                        </Content>
                    </Layout>
                    <Footer className="footerStyle">Footer</Footer>
                </Layout>
            </div>
        );
    }
}

export default Home;