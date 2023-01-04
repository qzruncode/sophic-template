import { Outlet, useNavigate } from 'react-router-dom';

import React, { useEffect } from 'react';
import { NotificationOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';

const Sider = Layout.Sider;
const Content = Layout.Content;

const menus = [
  {
    key: 'subnav',
    icon: React.createElement(NotificationOutlined),
    label: 'test',
    children: [
      {
        key: 'test1',
        label: 'test1',
      },
      {
        key: 'test2',
        label: 'test2',
      },
    ],
  },
];

const SophicTemplate = props => {
  const navigate = useNavigate();
  
  useEffect(() => {
    props.appPubSub?.subscribe('sophicTemplate', params => {
      console.log('params', params);
    });
    console.log('appPubSub', props.appPubSub);
  }, []);
  return (
    <Layout>
      <Sider width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['test1']}
          defaultOpenKeys={['subnav']}
          style={{ height: '100%', borderRight: 0 }}
          items={menus}
          onSelect={({ key, keyPath, selectedKeys, domEvent }) => {
            navigate(`/data/${selectedKeys[0]}`)
          }}
        />
      </Sider>

      <Content>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>test</Breadcrumb.Item>
            <Breadcrumb.Item>test1</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default SophicTemplate;
