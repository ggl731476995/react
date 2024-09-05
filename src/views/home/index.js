
import React, { Component,useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  AppstoreOutlined, MailOutlined, SettingOutlined,HomeFilled
} from '@ant-design/icons'; // 图标
import { Layout, Menu, Button, theme } from 'antd';
// Outlet 是react-router-dom 插件中的局部刷新
import { useNavigate,Outlet } from "react-router-dom";
import "../layout/layout.scss";

const { Header, Sider, Content } = Layout;


 
export default function() {
  const navigate = useNavigate();  // 导航跳转

  const clickSubMen = (e, key) => {
    console.log(e, 'clickSubMen')
    console.log(key, 'key')
    if (e.key == 'home') {
      navigate('/home');
    }
    if (e.key == 'myWork') {
      navigate('/home/myWork');
    }
  }
  // 菜单项
  const items = [
    {
      label: '消息',
      key: 'mail',
      icon: <MailOutlined />,
    },
    {
      label: '应用',
      key: 'app',
      icon: <AppstoreOutlined />,
      disabled: false,
    },
    {
      label: '设置',
      key: 'SubMenu',
      icon: <SettingOutlined />,
      children: [
        {
          label: '背景设置',
          key: 'setting:1',
        },
        {
          label: '系统设置',
          key: 'setting:2',
        },
      ],
    },
  ];
  // 左侧
  const leftItems = [
    {
      key: 'home',
      icon: <HomeFilled />,
      label: '首页',
    },
    {
      key: 'work',
      icon: <VideoCameraOutlined />,
      label: '工单管理',
      children: [
        {
          key: 'myWork',
          label: '我的工单',
        },
      ]
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      label: '订单管理',
    },
  ]
  // 侧边栏折叠状态
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className='layout'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical">
          <h1>React管理系统</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={leftItems}
          onClick={clickSubMen}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: '0' }}>
          <Menu className='menu' mode="horizontal" items={items} />;
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 0,
              height: 64,
              color: 'white',
            }}
          />
        </Header>
        <Content>
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
  
};
