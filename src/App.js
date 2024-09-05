// 导入页面组件
import { Divider } from "antd";
import Layout from "./views/layout/layout";
import Login from "./views/login/login";
import Home from './views/home/index';
import Work from './views/work/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  RouterProvider
} from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/layout" Component={Layout}>
    //   </Route>
    //   <Route path="/" Component={Login}>
    //   </Route>
    // </Routes>
    // </BrowserRouter>
    <Router>
      <Routes> 
        <Route path="/" Component={Login}></Route>
        <Route path="/home" Component={Home}>
        <Route path="myWork" Component={Work}></Route>
        </Route>
        
      </Routes>
    </Router> 
  );
}

export default App;
