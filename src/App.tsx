import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {ActionsTypes, RootStateType, storeType} from "./redux/state";
import {Route} from "react-router-dom";
import {RootStoreType, StoreType} from "./redux/redux-store";
import {DialogContainer} from "./components/Dialogs/DialogsContainer";


// type AppType = {
//
//     store: StoreType
// }

function App() {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={'/profile'} render={() => <Profile
                    // profilePage={props.state.profilePage}
                    // dispatch={props.dispatch}
                />}/>
                <Route path={'/dialogs'} render={() => <DialogContainer/>}/>
            </div>
        </div>
    );
}

export default App;
