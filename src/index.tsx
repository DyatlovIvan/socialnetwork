import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store'
import { BrowserRouter } from 'react-router-dom';

export const renderEntireTree = (state:any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
              state={state}
                dispatch={store.dispatch.bind(store)}

            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
renderEntireTree(store.getState())
store.subscribe(()=>renderEntireTree(store.getState()))


