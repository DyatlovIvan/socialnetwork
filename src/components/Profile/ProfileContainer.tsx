import React from "react";
import {Profile} from "./Profile";
import {RootStoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ProfileType, getUserProfile} from "../../redux/profilePageReducer";
import {RouteComponentProps, withRouter} from "react-router";
import {Redirect} from "react-router-dom";



type PathParamsType = {
    userId: string
}
type ownPropsType = mapStateToProps & mapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType>&ownPropsType

type mapStateToProps = {
    profile: ProfileType|null
    isAuth:boolean
}
type mapDispatchPropsType = {
    getUserProfile: (userId: string) => void
}


class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId='2'
        }
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
        //     .then(response => {
        //         this.props.setUserProfile(response.data)
        //     })
      this.props.getUserProfile(userId)

    }
    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile {...this.props}
                     profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: RootStoreType) => {
    return {profile: state.profilePage.profile,
            isAuth:state.auth.isAuth
    }


}
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);