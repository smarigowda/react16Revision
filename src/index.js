import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title="React 16 Revision with Unit Test"/>, document.getElementById('root'));
registerServiceWorker();
