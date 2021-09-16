import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import state, {RootStateType} from "./redux/state";
import {Dialog} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

type AppType ={
  state: RootStateType
}

function App(props:AppType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={() => <Profile profilePage={props.state.profilePage}/>} />
                    <Route path={'/dialogs'} render={() => <Dialog dialogsPage={props.state.dialogsPage}/>} />
                </div>
            </div>
        </BrowserRouter>
  );
}

export default App;
