import {RootStateType} from "./redux-store";

export const getUsers = (state:RootStateType) =>{
    return state.usersPage.users
}
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
