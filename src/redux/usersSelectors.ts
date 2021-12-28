import {RootStateType} from "./redux-store";
import {createSelector} from "reselect";

const getUserSelector = (state:RootStateType)=>{
    return state.usersPage.users
}

export const getUsers = createSelector(getUserSelector,(users)=>{
    return users.filter(el=>true)
})

export const getPageSize = (state:RootStateType) =>{
    return state.usersPage.pageSize
}
export const getTotalUserCount = (state:RootStateType) =>{
    return state.usersPage.totalUserCount
}
export const getCurrentPage = (state:RootStateType) =>{
    return state.usersPage.currentPage
}
export const getIsFetching = (state:RootStateType) =>{
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state:RootStateType) =>{
    return state.usersPage.followingInProgress
}
