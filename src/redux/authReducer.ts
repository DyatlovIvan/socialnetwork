import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppActionType, AppThunk, RootStateType} from "./redux-store";

type InitialStateType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: boolean
    errorMassage:string
}

const initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    errorMassage:''
}

export const authReducer = (state = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, ...action.payload}
        }
        case "LOGIN_SUCCESS":{
            return {...state,errorMassage:action.errorMassage}
        }
        default:
            return state
    }

}

export type AuthActionsType = SetAuthUserDataType | SetErrorMassageType
export type SetAuthUserDataType = ReturnType<typeof setAuthUserData>
const setAuthUserData = (userId:string|null , email:string|null , login:string|null,isAuth:boolean) => {
    return {
        type: 'SET_USER_DATA',
        payload: {userId: userId, email, login,isAuth}
    } as const
}

export type SetErrorMassageType = ReturnType<typeof setErrorMassage>
export const setErrorMassage = (errorMassage:string)=>{
    return{type:'LOGIN_SUCCESS',errorMassage} as const
}

export const getAuthUserData = () =>(dispatch: Dispatch<AuthActionsType>) => {
    return authAPI.getAuth()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => async dispatch => {
    try {
        const res = await authAPI.login(email, password, rememberMe)
        if (res.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }else{
            dispatch(setErrorMassage(res.data.messages[0]))
        }
    } catch (e) {
        //throw new Error(e)
    }
}

export const logout = (): AppThunk => (dispatch) => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null,null,null,false))
            }
        })
}

// export const login = (email: string, password: string, rememberMe: boolean): AppThunk => {
//     return (dispatch) => {
//         authAPI.login(email, password, rememberMe)
//             .then((res) => {
//                 if (res.data.resultCode === 0) {
//                     dispatch(getAuthUserData())
//                 }
//             })
//     }
// }