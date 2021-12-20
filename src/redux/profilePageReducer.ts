import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type InitialStateType = {
    posts: Array<PostsType>
    profile: ProfileType | null
    status: string
}

export type PostsType = {
    id: number
    message: string
    likeCount: number
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

const initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hi, how a u?', likeCount: 12},
        {id: 2, message: "It\'s my first post", likeCount: 10}
    ],
    profile: null,
    status: ''
}

export const profilePageReducer = (state = initialState, action: ProfileActionsTypes): InitialStateType => {

    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                posts: [{id: 3, message: action.newPostText, likeCount: 0},...state.posts,]
            }
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        case "SET_STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}


export type ProfileActionsTypes = AddPostType | SetUserProfileType | SetStatusType
// type AddPostActionCreatorType = {
//     type: 'ADD-POST'
// }
type AddPostType = ReturnType<typeof addPost>
export const addPost = (newPostText:string) => {
    return {
        type: 'ADD-POST',newPostText
    } as const
}

type SetUserProfileType = ReturnType<typeof setUserProfile>
const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET_USER_PROFILE', profile
    } as const
}

type SetStatusType = ReturnType<typeof setStatus>
const setStatus = (status: string) => {
    return {
        type: 'SET_STATUS', status
    } as const
}

export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const putStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}
