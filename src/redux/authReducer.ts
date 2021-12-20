import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppActionType, AppThunk, RootStoreType} from "./redux-store";

type InitialStateType = {
    id: null | string
    email: null | string
    login: null | string
    isAuth: boolean
}

const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, ...action.data, isAuth: true}
        }
        default:
            return state
    }

}

export type AuthActionsType = SetAuthUserDataType
type SetAuthUserDataType = ReturnType<typeof setAuthUserData>
const setAuthUserData = (userId: string, email: string, login: string) => {
    return {
        type: 'SET_USER_DATA',
        data: {id: userId, email, login}
    } as const
}

export const getAuthUserData = () => (dispatch: Dispatch<AuthActionsType>) => {
    authAPI.getAuth().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login))
        }
    })
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => async dispatch => {
    try {
        const res = await authAPI.login(email, password, rememberMe)
        if (res.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    } catch (e) {
        //throw new Error(e)
    }
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