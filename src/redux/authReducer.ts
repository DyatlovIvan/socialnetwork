import {Dispatch} from "redux";
import {authAPI, ResultCodeForCaptchaEnum, ResultCodesEnum, securityAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppActionType, AppThunk, RootStateType} from "./redux-store";

type InitialStateType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: boolean
    errorMassage: string
    captchaUrl: null | string
}

const initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    errorMassage: '',
    captchaUrl: null
}

export const authReducer = (state = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case "AUTH/SET_USER_DATA": {
            return {...state, ...action.payload}
        }
        case "AUTH/LOGIN_SUCCESS": {
            return {...state, errorMassage: action.errorMassage}
        }
        case "AUTH/GET_CAPTCHA_URL_SUCCESS": {
            return {...state, captchaUrl: action.payload}
        }
        default:
            return state
    }

}

export type AuthActionsType =
    | SetAuthUserDataType
    | SetErrorMassageType
    | getCaptchaUrlSuccessType

export type SetAuthUserDataType = ReturnType<typeof setAuthUserData>
const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'AUTH/SET_USER_DATA',
        payload: {userId: userId, email, login, isAuth}
    } as const
}

export type SetErrorMassageType = ReturnType<typeof setErrorMassage>
export const setErrorMassage = (errorMassage: string) => {
    return {type: 'AUTH/LOGIN_SUCCESS', errorMassage} as const
}

export type getCaptchaUrlSuccessType = ReturnType<typeof getCaptchaUrlSuccess>
const getCaptchaUrlSuccess = (captchaUrl: string) => {
    return {type: 'AUTH/GET_CAPTCHA_URL_SUCCESS', payload: captchaUrl} as const
}

export const getAuthUserData = () => async (dispatch: Dispatch<AuthActionsType>) => {
    let response = await authAPI.getAuth()
    if (response.data.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => async dispatch => {
        const response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === ResultCodesEnum.Success) {
            dispatch(getAuthUserData())
        } else {
            debugger
            if (response.data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
                dispatch(getCaptchaUrl())
            }
            dispatch(setErrorMassage(response.data.messages[0]))
        }
}

export const logout = (): AppThunk => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = (): AppThunk => async dispatch => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))

}

