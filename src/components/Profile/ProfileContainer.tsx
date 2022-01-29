import React from "react";
import {Profile} from "./Profile";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ProfileType, getUserProfile, getStatus, putStatus, savePhoto} from "../../redux/profilePageReducer";
import {RouteComponentProps, withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}
type ownPropsType = mapStateToPropsType & mapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & ownPropsType

type mapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number
    isAuth: boolean


}
type mapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    putStatus: (status: string) => void
    savePhoto: (photo: File) => void
}


class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = +this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }


    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        // if (this.props.match.params.userId) {
        //if (this.props.match.params.userId !== prevState.match.params.userId) {
        this.refreshProfile()
        // }
        //  }

    }


    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.putStatus}
                     savePhoto={this.props.savePhoto}/>
        )
    }
}


const mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

//let WithUrlDataContainerComponent = withRouter(ProfileContainer)
// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent));

export const ProfilesContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, putStatus, savePhoto}),
    withAuthRedirect,
    withRouter
)(ProfileContainer)