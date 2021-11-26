import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {RouteComponentProps, withRouter} from "react-router";
import {RootStoreType} from "../../redux/redux-store";

type PathParamsType = {
    id:string
    email:string
    login:string
}

type ownPropsType = mapStateToProps & mapDispatchPropsType
type mapStateToProps = {
    isAuth:boolean
    login:string
}
type mapDispatchPropsType = {
    setAuthUserData:(userId:string,email:string,login:string)=>void
}


type PropsType = RouteComponentProps<PathParamsType>&ownPropsType
class HeaderContainer extends React.Component<any> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
            {
                withCredentials: true
            }).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                this.props.setAuthUserData(id, email, login)
            }

        })
    }

    render() {
        return <Header login={this.props.login}
                       isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: RootStoreType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

// let WithUrlDataContainerComponent = withRouter(HeaderContainer)
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)