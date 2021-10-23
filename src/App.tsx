import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {ActionsTypes, RootStateType, storeType} from "./redux/state";
import {Dialog} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


type AppType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

function App(props: AppType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={'/profile'} render={() => <Profile profilePage={props.state.profilePage}
                                                                dispatch={props.dispatch}/>}/>
                <Route path={'/dialogs'} render={() => <Dialog dialogsPage={props.state.dialogsPage}
                                                               dispatch={props.dispatch}/>}/>
            </div>
        </div>
    );
}

export default App;
