import React from "react";
import {LoginDataType, LoginForm} from "./loginForm";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {RootStoreType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

type LoginType ={
    isAuth: boolean
    login:(email: string, password: string, rememberMe: boolean)=>void
}
 const Login = (props:LoginType) => {
    const onSubmit = (formData:LoginDataType)=>{
        props.login(formData.email,formData.password,formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to = {'/profile'}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm onSubmit = {onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state:RootStoreType) => {
    return{
        isAuth:state.auth.isAuth
    }
}

export default connect(mapStateToProps,{login})(Login)

