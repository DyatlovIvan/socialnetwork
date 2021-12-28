import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/authReducer";
import {RootStateType} from "../../redux/redux-store";


type mapStateToProps = {
    isAuth: boolean
    login: string | null
}
type mapDispatchPropsType = {
    logout:()=>void
}

class HeaderContainer extends React.Component<mapStateToProps & mapDispatchPropsType> {


    render() {
        return <Header login={this.props.login}
                       isAuth={this.props.isAuth}
                       logout={this.props.logout}/>
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer)