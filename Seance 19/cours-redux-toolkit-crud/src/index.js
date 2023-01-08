
import ReactDOM from "react-dom/client";
import App from './App';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'
import userReducer   from './features/Users'
import compteurReducer from "./features/Compteur";

const root=ReactDOM.createRoot(document.getElementById("root"));
const store=configureStore({
    reducer:{
        users:userReducer,
        compteur:compteurReducer
    }
})
store.dispatch({type:'counter/increment'})
store.dispatch({type:'counter/incrementByAmount',payload:10})
console.log(store.getState())
root.render(<>
    <Provider store={store}>  
    <App/>
    </Provider>
  
    </>)


