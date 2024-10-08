import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  AppstoreOutlined, MailOutlined, SettingOutlined
} from '@ant-design/icons'; // 图标
import { Layout, Menu, Button, theme } from 'antd';
import "./layout.scss";
import Item from 'antd/es/list/Item';

const { Header, Sider, Content } = Layout;

const clickSubMen = (e, key) => {
  console.log(e,'clickSubMen')
  console.log(key,'key')
}
 


export default function () {
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
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: '个人主页',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: '工单管理',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: '订单管理',
            },
          ]}
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
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
