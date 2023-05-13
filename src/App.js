import React, { useState } from 'react';
import './index.css';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, Input, Button, Space, Avatar, theme } from 'antd';
import {UserGrid, ChannelSelect} from './style.js';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <FileOutlined />),
  getItem('Option 2', '2', <FileOutlined />),
  getItem('Files', '9', <FileOutlined />),
];

let userAlias = "Guest";

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider style={{ background: '#1E1E20',
        overflow: 'auto',
        height: '100%',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}>
        <img src='/apiara.png' style ={{width: '25%'}}/>
        <Space.Compact style={{ width: '100%', padding: '5%', align: 'center' }}>
          <Input  placeholder="Server Name" />
          <Button type="primary">Connect</Button>
        </Space.Compact>

        <div>
        <ChannelSelect> Channel Selection </ChannelSelect>
        <Menu defaultSelectedKeys={['1']} mode="inline" items={items} style={{ background: '#2B2B2D', color: '#88888D', padding: '5%' }} />
        </div>

        <UserGrid>
          <Avatar size="small" icon={<UserOutlined />} />
          <div block style={{ margin: '0', background: '#38383A', color: 'white'}}> {userAlias} </div>
          <Button block style={{ margin: '0', background: '#3A7EFF', color: 'white'}}> Change Alias </Button>
        </UserGrid>

      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: '#1E1E20' }} />
        <Content style={{ margin: '0', background: '#1E1E20' }}>
          <div style={{ padding: 24, minHeight: 500, background: '#2B2B2D', color: '#88888D' }}>
            Bill is a cat.
          </div>

        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
