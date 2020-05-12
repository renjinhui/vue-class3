import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';

import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
// 上边三行是 转中文的

import 'antd/dist/antd.css';
import './index.css';
import App from './view/App';
import * as serviceWorker from './serviceWorker';

import store from './store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider  store={store}>
    <ConfigProvider locale={zhCN}>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
