import * as React from 'react';
import ReactDOM from "react-dom/client";
import { Sophic } from 'sophic';
import createRouter from './code/router';
import { RouterProvider } from 'react-router-dom';

import './index.less';

const subAppName = 'sophicTemplate';
const hasMaster = Sophic.handleHasMaster(subAppName); // 是否在主应用中加载
const appState = window.appState; // 主应用中的状态

let root;
export function mount({ History, appPubSub }: any) {
  root = ReactDOM.createRoot(document.getElementById(subAppName) as HTMLElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={createRouter({ appPubSub })} />
    </React.StrictMode>
  );
}

export function unmount() {
  root && root.unmount();
}

if (!hasMaster) {
  mount({});
}

window[subAppName] = {
  mount,
  unmount,
};
