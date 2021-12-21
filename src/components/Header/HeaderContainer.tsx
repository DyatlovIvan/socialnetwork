import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/authReducer";
import {RootStoreType} from "../../redux/redux-store";


type mapStateToProps = {
    isAuth: boolean
    login: string | null
}
type mapDispatchPropsType = {
    getAuthUserData: () => void
    logout:()=>void
}

class HeaderContainer extends React.Component<mapStateToProps & mapDispatchPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header login={this.props.login}
                       isAuth={this.props.isAuth}
                       logout={this.props.logout}/>
    }
}

const mapStateToProps = (state: RootStoreType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuthUserData,logout})(HeaderContainer)