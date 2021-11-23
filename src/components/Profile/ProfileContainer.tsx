import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {RootStoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {addPost, PostsType, ProfileType, setUserProfile, updateNewPostText} from "../../redux/profilePageReducer";


type mapStateToProps = {
    profile: ProfileType
}
type mapDispatchPropsType = {
    setUserProfile: (profile: any) => void
}
type PropsType = mapStateToProps & mapDispatchPropsType


class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
    if(state.profilePage.profile===null){
        return null
    }else{ return {profile: state.profilePage.profile}}


}


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);