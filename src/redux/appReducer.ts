import {AuthActionsType, getAuthUserData} from "./authReducer";
import {ThunkAction} from "redux-thunk";
import {Dispatch} from "redux";
import {RootStateType} from "./redux-store";

type InitialStateType = {
    initialized:boolean
}

const initialState = {
    initialized: false
}

export const appReducer = (state:InitialStateType = initialState,action:appReducerActionType):InitialStateType =>{
        switch (action.type) {
            case 'INITIALIZED_SUCCESS':{
                return {...state,initialized:true}
            }
            default: return state

        }
}
type appReducerActionType = ReturnType<typeof initializedSuccess>|AuthActionsType
export const initializedSuccess = ()=>({type:'INITIALIZED_SUCCESS'}) as const

export const initializeApp = (): ThunkAction<void, RootStateType, unknown, appReducerActionType> => async (dispatch) => {
    await dispatch(getAuthUserData())
    dispatch(initializedSuccess())


}