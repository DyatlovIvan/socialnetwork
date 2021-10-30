import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePageReducer";
import {dialogsPageReducer} from "./dialogsPageReducer";

let reducers = combineReducers({
    profilePageReducer,
    dialogsPageReducer
})
export let store = createStore();