import { Outlet, useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { NotificationOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';

const Sider = Layout.Sider;
const Content = Layout.Content;

const menus = [
  {
    key: 'sub',
    icon: React.createElement(NotificationOutlined),
    label: '子应用',
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
  const [selectedKeys, setSelectedKeys] = useState(['sub']);

  useEffect(() => {
    if (location.pathname.includes('test2')) {
      setSelectedKeys(['sub', 'test2']);
    } else {
      setSelectedKeys(['sub', 'test1']);
    }
  }, [location]);

  return (
    <Layout>
      <Sider width={200}>
        <Menu
          mode="inline"
          selectedKeys={selectedKeys}
          defaultOpenKeys={['sub']}
          style={{ height: '100%', borderRight: 0 }}
          items={menus}
          onSelect={({ key, keyPath, selectedKeys, domEvent }) => {
            navigate(`/sub/${selectedKeys[0]}`);
            setSelectedKeys(selectedKeys);
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
