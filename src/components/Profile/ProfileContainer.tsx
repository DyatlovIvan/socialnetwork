import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {RootStoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profilePageReducer";
import {RouteComponentProps, withRouter} from "react-router";


type PathParamsType = {
    userId: string
}
type ownPropsType = mapStateToProps & mapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType>&ownPropsType

type mapStateToProps = {
    profile: ProfileType|null
}
type mapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}


class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId='2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }


    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: RootStoreType) => {
    return {profile: state.profilePage.profile}


}
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);