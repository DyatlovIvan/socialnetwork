import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {RouteComponentProps, withRouter} from "react-router";
import {RootStoreType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";


type mapStateToProps = {
    isAuth: boolean
    login: string | null
}
type mapDispatchPropsType = {
    setAuthUserData: (userId: string, email: string, login: string) => void
}

class HeaderContainer extends React.Component<mapStateToProps & mapDispatchPropsType> {

    componentDidMount() {
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)