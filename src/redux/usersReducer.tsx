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

}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false
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
        case 'TOGGLE_IS_FETCHING':{
            return {...state,isFetching:action.isFetching}
        }
        default:
            return state
    }
}

type ActionsTypes = followType | unfollowType | setUsersType | setCurrentPageType | setTotalUsersCountType |
    toggleIsFetchingType

type followType = ReturnType<typeof follow>
export const follow = (userId: number) => {
    return {
        type: 'FOLLOW', userId
    } as const
}

// type ActionCommonType = ReturnType<typeof addPostActionCreator> |  ReturnType<typeof updateNewPostTextActionCreator>
type unfollowType = ReturnType<typeof unfollow>
export const unfollow = (userId: number) => {
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