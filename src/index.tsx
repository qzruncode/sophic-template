import * as React from 'react';
import ReactDOM from "react-dom/client";
import { handleHasMaster } from 'sophic';
import createRouter from './code/router';
import { RouterProvider } from 'react-router-dom';

import './index.less';

const subAppName = 'sophicTemplate';
const hasMaster = handleHasMaster(subAppName); // 是否在主应用中加载
const appState = window.appState; // 主应用中的状态

const root = ReactDOM.createRoot(document.getElementById(subAppName) as HTMLElement);
export function mount({ History, appPubSub }: any) {
  console.log('end', Date.now());
  root.render(
    <React.StrictMode>
      <RouterProvider router={createRouter({ appPubSub })} />
    </React.StrictMode>
  );
}

export function unmount() {
  root.unmount();
}

if (!hasMaster) {
  mount({});
}

window[subAppName] = {
  mount,
  unmount,
};
