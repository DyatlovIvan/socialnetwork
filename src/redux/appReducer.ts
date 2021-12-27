import {Dispatch} from "redux";
import {getAuthUserData} from "./authReducer";

type InitialStateType = {
    initialized:boolean
}

const initialState = {
    initialized: false
}

const appReducer = (state:InitialStateType = initialState,action:any):InitialStateType =>{
        switch (action.type) {
            case 'INITIALIZED_SUCCESS':{
                return {...state,initialized:true}
            }
            default: return state

        }
}

export const initializedSuccess = ()=>({type:'INITIALIZED_SUCCESS'}) as const
export const initializeApp = () => (dispatch:Dispatch)=>{
    dispatch(getAuthUserData())
}