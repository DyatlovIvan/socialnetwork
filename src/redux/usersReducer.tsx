
export type InitialStateType = {
    users: Array<UsersType>
}

export type UsersType = {
    id: number
    followed:boolean
    fullName:string
    photoUrl:string
    status:string
    location:{
        city:string
        country:string
    }
}

const initialState: InitialStateType = {
    users: []
}

export const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case "FOLLOW":{
            return {...state,users:state.users.map(el=>el.id === action.userId?{...el,followed:true}:{...el})}
        }
        case 'UNFOLLOW':{
            return {...state,users:state.users.map(el=>el.id === action.userId?{...el,followed:false}:{...el})}
        }
        case 'SET_USERS':{
            return {...state,users:[...state.users,...action.users]}
        }
        default:
            return state
    }
}

type ActionsTypes = followACType | unfollowACType | setUsersACType

type followACType = ReturnType<typeof followAC>
export const followAC = (userId:number) => {
    return {
        type: 'FOLLOW',userId
    } as const
}

// type ActionCommonType = ReturnType<typeof addPostActionCreator> |  ReturnType<typeof updateNewPostTextActionCreator>
type unfollowACType  =ReturnType<typeof unfollowAC>
export const unfollowAC = (userId:number) => {
    return {
        type: 'UNFOLLOW',userId
    } as const
}

type setUsersACType  = ReturnType<typeof setUsersAC>
export const  setUsersAC = (users:Array<UsersType>)=>{
    return{
        type: 'SET_USERS',users
    }as const
}
