import React from "react";
import {Profile} from "./Profile";
import {RootStoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ProfileType, getUserProfile} from "../../redux/profilePageReducer";
import {RouteComponentProps, withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from "redux";


type PathParamsType = {
    userId: string
}
type ownPropsType = mapStateToPropsType & mapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & ownPropsType

type mapStateToPropsType = {
    profile: ProfileType | null
}
type mapDispatchPropsType = {
    getUserProfile: (userId: number) => void
}


class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)

    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}/>
        )
    }
}


const mapStateToProps = (state: RootStoreType) => {
    return {
        profile: state.profilePage.profile,
    }
}

//let WithUrlDataContainerComponent = withRouter(ProfileContainer)

// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent));

export  default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withAuthRedirect,
    withRouter
)(ProfileContainer)