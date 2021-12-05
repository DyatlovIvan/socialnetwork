import {followAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string
        large: string
    }
    status: string | null
    followed: boolean
    location: {
        city: string
        country: string
    }
}

export type InitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : {...el})}
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : {...el})
            }
        }
        case 'SET_USERS': {
            return {...state, users: action.users}
        }
        case 'SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET_TOTAL_USERS_COUNT': {
            return {...state, totalUserCount: action.totalUsersCount}
        }
        case 'TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE_FOLLOWING_IN_PROGRESS": {
            return action.isFetching ? {...state, followingInProgress: [...state.followingInProgress, action.userId]}
                : {...state, followingInProgress: state.followingInProgress.filter(el => el !== action.userId)}
        }
        default:
            return state
    }
}

type ActionsTypes =
    followSuccessType
    | unfollowSuccessType
    | setUsersType
    | setCurrentPageType
    | setTotalUsersCountType
    |
    toggleIsFetchingType
    | toggleFollowingInProgressType

type followSuccessType = ReturnType<typeof followSuccess>
export const followSuccess = (userId: number) => {
    return {
        type: 'FOLLOW', userId
    } as const
}

// type ActionCommonType = ReturnType<typeof addPostActionCreator> |  ReturnType<typeof updateNewPostTextActionCreator>
type unfollowSuccessType = ReturnType<typeof unfollowSuccess>
export const unfollowSuccess = (userId: number) => {
    return {
        type: 'UNFOLLOW', userId
    } as const
}

type setUsersType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: 'SET_USERS', users
    } as const
}

type setCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE', currentPage
    } as const
}

type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT', totalUsersCount
    } as const
}
type toggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING', isFetching
    } as const
}

type toggleFollowingInProgressType = ReturnType<typeof toggleFollowingInProgress>
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE_FOLLOWING_IN_PROGRESS', isFetching, userId
    } as const
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })

    }
}

export const onPageChangedThunkCreator = (pageNumber: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(pageNumber))
        usersAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
        })
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        followAPI.deleteFollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingInProgress(false, userId))
        })
    }
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        followAPI.postFollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingInProgress(false, userId))
        })
    }
}