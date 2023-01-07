import { Button } from 'antd';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sophic } from 'sophic';

const Test = () => {
  useEffect(() => {
    const sophic = Sophic.getSophic(); // 得到在主应用中创建的Sophic实例
    const cb = params => {
      console.log(`我是子应用，我接收到${params.from}的消息：`, params.message);
    }
    sophic.appPubSub.subscribe('sophicTemplate', cb);
    return () => {
      sophic.appPubSub.unsubscribe('sophicTemplate', cb)
    }
  }, []);
  const navigateToMaster = () => {
    console.log('navigateToMaster', '执行了');
    const sophic = Sophic.getSophic(); // 得到在主应用中创建的Sophic实例
    sophic.appPubSub.publish('sophicTemplate', {
      from: 'sophicTemplate',
      message: '/main'
    })
  };
  return (
    <div className="test_box">
      <span>我是微应用中的页面test1，我想访问主应用的页面</span>
      <a href="/main">a标签的方式跳转main</a>
      <Button style={{ width: 200 }} onClick={navigateToMaster}>appPubSub方式跳转main</Button>
    </div>
  );
};

export default Test;
