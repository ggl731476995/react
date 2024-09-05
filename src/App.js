// 导入页面组件
import Layout from "./views/layout/layout";
import Login from "./views/login/login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/layout" Component={Layout}>
      </Route>
      <Route path="/" Component={Login}>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
