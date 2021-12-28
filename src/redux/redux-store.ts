import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionsTypes, profilePageReducer} from "./profilePageReducer";
import {DialogsActionsTypes, dialogsPageReducer} from "./dialogsPageReducer";
import {UsersActionsTypes, usersReducer} from "./usersReducer";
import {AuthActionsType, authReducer} from "./authReducer";
import thunk, {ThunkAction} from "redux-thunk";
import {appReducer} from "./appReducer";


let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersReducer,
    auth:authReducer,
    app:appReducer

})
export  type AppActionType = AuthActionsType
    | DialogsActionsTypes
    | ProfileActionsTypes
    | UsersActionsTypes


export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, AppActionType>
let store = createStore(reducers,applyMiddleware(thunk));

export type RootStateType = ReturnType<typeof reducers>
export type StoreType = typeof store

export default store

// @ts-ignore
window.store = store