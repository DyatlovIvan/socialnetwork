import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {RootStoreType} from "../redux/redux-store";


type mapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    debugger
    const RedirectComponent = (props: mapStateToPropsType) => {
        debugger
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    }
    debugger
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
}