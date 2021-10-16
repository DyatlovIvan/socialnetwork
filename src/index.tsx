import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {subscribes} from './redux/state';

import {addPost, RootStateType, updateNewPostText} from './redux/state';

export const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

subscribes(renderEntireTree)
renderEntireTree()

