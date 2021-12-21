import React from "react";
import {LoginDataType, LoginForm} from "./loginForm";
import {connect} from "react-redux";
import {login,setErrorMassage} from "../../redux/authReducer";
import {RootStoreType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";



type LoginType = {
    isAuth: boolean
    errorMassage: string
    login: (email: string, password: string, rememberMe: boolean) => void
    setErrorMassage:(errorMassage:string)=>void
}

const Login = (props: LoginType) => {
    const onSubmit = (formData: LoginDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm errorMassage={props.errorMassage}
                       setErrorMassage = {props.setErrorMassage}
                       onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: RootStoreType) => {
    return {
        isAuth: state.auth.isAuth,
        errorMassage: state.auth.errorMassage
    }
}

export default connect(mapStateToProps ,{login,setErrorMassage})(Login)

