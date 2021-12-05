import {connect} from "react-redux";
import {RootStoreType} from "../../redux/redux-store";
import {
    followSuccess, getUsersThunkCreator, onPageChangedThunkCreator,
    toggleFollowingInProgress,
    unfollowSuccess,follow,unfollow,
    UsersType
} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";


type UsersPresentType = {
    users: Array<UsersType>
    totalUserCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    followSuccess: (userId: number) => void
    unfollowSuccess: (userId: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    onPageChangedThunkCreator: (pageNumber: number, pageSize: number) => void
    follow:(userId:number) => void
    unfollow:(userId:number) => void
}

class UsersContainer extends React.Component<UsersPresentType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {

        this.props.onPageChangedThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   followSuccess={this.props.followSuccess}
                   unfollowSuccess={this.props.unfollowSuccess}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                   follow = {this.props.follow}
                   unfollow = {this.props.unfollow}
            />
        </>

    }
}

const mapStateToProps = (state: RootStoreType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    followSuccess, unfollowSuccess,
    toggleFollowingInProgress,
    getUsersThunkCreator, onPageChangedThunkCreator,follow,unfollow
})(UsersContainer)