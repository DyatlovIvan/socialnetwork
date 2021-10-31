import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {RootStoreType, StoreType} from './redux/redux-store'
import {BrowserRouter} from 'react-router-dom';


export const renderEntireTree = (state: RootStoreType) => {
    ReactDOM.render(
        <BrowserRouter>
                <App
                    store={store}
                />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
renderEntireTree(store.getState())
store.subscribe(() => renderEntireTree(store.getState()))



