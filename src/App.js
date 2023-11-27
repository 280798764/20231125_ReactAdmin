

//应用的根组件
import React from "react";
import { BrowserRouter, Route, Routes,  Switch} from "react-router-dom";
import Home from './pages/home'
import Login from './pages/login'
import Table from './pages/table'
import Echarts from './pages/echarts'
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return ( 
      // <Home/>
      // <Login/>
    <BrowserRouter>

    <Switch>
      <Route path="/" exact component={Login}></Route>
      <Route path="/home" component={Home}></Route>
    </Switch>
    
    </BrowserRouter>
     );
  }
}
 
export default App;

