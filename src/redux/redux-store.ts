import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {ProfileActionsTypes, profilePageReducer} from "./profilePageReducer";
import {DialogsActionsTypes, dialogsPageReducer} from "./dialogsPageReducer";
import {UsersActionsTypes, usersReducer} from "./usersReducer";
import {AuthActionsType, authReducer} from "./authReducer";
import thunk, {ThunkAction} from "redux-thunk";
import {appReducer} from "./appReducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

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
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))


export type RootStateType = ReturnType<typeof reducers>
export type StoreType = typeof store

export default store

// @ts-ignore
window.store = store