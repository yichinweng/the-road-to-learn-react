import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 使用 App 替換 root 節點
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// 開啟 Hot Module Replacement (HMR)
if (module.hot) {
    module.hot.accept();
}
