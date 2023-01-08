import ReactDOM from 'react-dom/client';
import App from './components/App';
import store from './components/store';

import {Provider} from 'react-redux';
const root=ReactDOM.createRoot(document.getElementById('root'));


// const store = createStore(
//     allReducers, /* preloadedState, */
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
//voir store.js
root.render(<Provider store={store}>
             <App/>
            </Provider>)