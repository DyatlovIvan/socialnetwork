import React from "react";
import {LoginDataType, LoginForm} from "./loginForm";
import {connect} from "react-redux";
import {login,setErrorMassage} from "../../redux/authReducer";
import {RootStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";



type LoginType = {
    isAuth: boolean
    errorMassage: string
    captchaUrl: null | string
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
                       onSubmit={onSubmit}
                       captchaUrl = {props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        errorMassage: state.auth.errorMassage,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps ,{login,setErrorMassage})(Login)

