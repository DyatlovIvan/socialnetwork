import React from "react";
import {UserType} from "../../redux/usersReducer";
import {Paginator} from "../../common/Paginator/Paginator";
import {User} from "./User";

type PropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    onPageChanged: (pageNumber: number) => void
    unfollowSuccess: (userId: number) => void
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users = (props: PropsType) => {

    return (
        <div>
            <Paginator totalItemsCount={props.totalUserCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}/>
            {props.users.map(el => <User key={el.id}
                                         user={el}
                                         unfollowSuccess={props.unfollowSuccess}
                                         followingInProgress={props.followingInProgress}
                                         follow={props.follow}
                                         unfollow={props.unfollow}/>
            )}
        </div>
    )
}