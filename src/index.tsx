import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {RootStoreType, StoreType} from './redux/redux-store'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";


export const renderEntireTree = (state: RootStoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                   // store={store}
                />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
renderEntireTree(store.getState())
store.subscribe(() => renderEntireTree(store.getState()))



