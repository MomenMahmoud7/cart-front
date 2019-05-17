import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger'
import App from './App';
import { data } from './Data/Reducer';
import { navBar } from './Components/NavBar/Reducer';
import { sideBar } from './Components/SideBar/Reducer';
import { signIn } from './Components/SignIn/Reducer';
import { signUp } from './Components/SignUp/Reducer';
import { cart } from './Components/Cart/Reducer';
import { addProduct } from './Components/Add Product/Reducer';

const logger = createLogger();
const rootReducer = combineReducers({
    data,
    navBar,
    sideBar,
    signIn,
    signUp,
    cart,
    addProduct,
})
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);