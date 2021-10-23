import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state'
import { BrowserRouter } from 'react-router-dom';

export const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
              state={store.getState()}
                dispatch={store.dispatch.bind(store)}
                store = {store}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

console.log('stttore', store.getState())


store.subscribes(renderEntireTree)
renderEntireTree()

