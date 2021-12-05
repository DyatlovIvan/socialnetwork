import {applyMiddleware, combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePageReducer";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
// import thunkMiddleware from "redux-thunk";
import thunk from "redux-thunk";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersReducer,
    auth:authReducer
})
let store = createStore(reducers,applyMiddleware(thunk));

export type RootStoreType = ReturnType<typeof reducers>
export type StoreType = typeof store

export default store

// @ts-ignore
window.store = store