import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'semantic-ui-css/semantic.min.css';
import App from './App/App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger'
import { data } from './App/Reducer';
import { sideBar } from './Components/Layout/SideBar/Reducer';
import { signIn } from './Components/SignIn/Reducer';
import { signUp } from './Components/SignUp/Reducer';
import { cart } from './Components/Cart/Reducer';
import { addProduct } from './Components/AddProduct/Reducer';
import { category } from './Components/Category/Reducer';

const logger = createLogger();
const rootReducer = combineReducers({
    data,
    sideBar,
    signIn,
    signUp,
    cart,
    addProduct,
    category,
})
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);