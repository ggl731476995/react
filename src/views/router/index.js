// 1.引入方法，用于创建路由实例
import { createBrowserRouter } from 'react-router-dom' 
 
// 2.引入组件
import LoginPage from '../login/login';
import IndexPage from '../layout/layout';
 
// 3.创建router实例，配置路由
const router = createBrowserRouter([ 
  {
    // path:"/login", // searchParams方式传参
    path:"/login", // params方式传参
    element:<LoginPage></LoginPage> // 渲染页面的地方
  },
  {
    path:"/index",
    element:<IndexPage></IndexPage>
  },
  {
    path:"",
    element:<div>欢迎来到首页</div>
  }
])
 
// 4.暴露路由实例，用于在App.js主入口组件
export default router;