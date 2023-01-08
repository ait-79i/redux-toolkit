import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import {legacy_createStore as createStore} from 'redux'
import reducer from './Counter/CounterStore';

import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

const store=createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 )

  root.render(
  <Provider store={store}>
  
    <App />
  
  </Provider>
);


