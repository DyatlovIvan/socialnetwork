import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {DialogContainer} from "./components/Dialogs/DialogsContainer";
import {Users} from "./components/Users/Users";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/dialogs'} render={() => <DialogContainer/>}/>
                <Route path={'/users'} render={() => <Users/>}/>
            </div>
        </div>
    );
}

export default App;
