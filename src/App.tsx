import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
//import {DialogContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {DialogContainer} from "./components/Dialogs/DialogsContainer";




const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Switch>
                <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                <Route path={"/dialogs"} render={() => <DialogContainer/>}/>
                <Route path={"/users"} render={() => <UsersContainer/>}/>
                <Route path={"/login"} render={() => <Login/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
