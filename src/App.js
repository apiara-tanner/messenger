import React, { useState } from 'react';
import './index.css';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  MessageFilled,
  CloudFilled,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, Input, Button, Space, Avatar, theme } from 'antd';
import {UserGrid, ChannelSelect, MenuTab, LogoDiv, ServerDiv, ServerButton, ServerInput, AliasButton, AliasInput} from './style.js';

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
  getItem('Option 1', '1', <CloudFilled />),
  getItem('Option 2', '2', <CloudFilled />),
  getItem('Files', '9', <CloudFilled />),
];

let userAlias = "Guest";

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width= '27%' style={{
        background: '#1E1E20',
        overflow: 'auto',
        height: '100%',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}>
      <Space direction="vertical" size="small" style={{ display: 'flex' }}>

        <LogoDiv>
          <img src='/apiara-messenger.png' style ={{width: '95%'}}/>
        </LogoDiv>
        <ServerDiv>
          <ServerInput />
          <ServerButton>Connect</ServerButton>
        </ServerDiv>

        <MenuTab>
        <ChannelSelect> Channel History </ChannelSelect>
        <Menu defaultSelectedKeys={['1']} mode="inline" items={items} style={{ background: '#2B2B2D', color: '#88888D'}} />
        </MenuTab>

          <UserGrid>
            <Avatar icon={<UserOutlined />} />
            <Space.Compact style={{ width: '100%', align: 'center' }}>
              <AliasInput />
              <AliasButton type="primary">Change Alias</AliasButton>
            </Space.Compact>
          </UserGrid>
</Space>


      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: '#1E1E20' }} />
        <Content style={{ margin: '0', background: '#1E1E20' }}>
          <div style={{ padding: 24, minHeight: 7, background: '#2B2B2D', color: '#88888D', margin: '5%' }}>
            Bill is a cat.
          </div>

        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
