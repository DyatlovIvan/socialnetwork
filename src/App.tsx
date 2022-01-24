import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
// import {DialogContainer} from "./components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {Preloader} from "./common/preloader/Preloader";
import {RootStateType} from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogContainer = React.lazy(() =>
    import('./components/Dialogs/DialogsContainer')
        .then(({DialogContainer}) => ({default: DialogContainer})),
);
const ProfileContainer = React.lazy(() =>
    import('./components/Profile/ProfileContainer')
        .then(({ProfileContainer}) => ({default: ProfileContainer})),
);


//jsx-> (bable in JS and for component create)React.createElement
type mapStateToPropsType = {
    initialized: boolean
}
type mapDispatchPropsType = {
    initializeApp: () => void
}
type ownPropsType = mapStateToPropsType & mapDispatchPropsType

class App extends React.Component<ownPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path={"/profile/:userId?"}
                               render={withSuspense(ProfileContainer)}/>
                        <Route path={"/dialogs"}
                               render={withSuspense(DialogContainer)}/>
                        <Route path={"/users"} render={() => <UsersContainer/>}/>
                        <Route path={"/login"} render={() => <Login/>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)