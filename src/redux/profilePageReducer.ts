import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {RootStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";

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
    aboutMe:string
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
                posts: [{id: 3, message: action.newPostText, likeCount: 0}, ...state.posts,]
            }
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        case "SET_STATUS":
            return {...state, status: action.status}
        case "DELETE-POST":
            return {...state, posts: state.posts.filter(f => f.id !== action.id)}
        case "SAVE_PHOTO_SUCCESS" :
            return {...state, profile : state.profile && {...state.profile, photos: action.photos}}
        default:
            return state
    }
}


export type ProfileActionsTypes =
    | AddPostType
    | DeletePostType
    | SetUserProfileType
    | SetStatusType
    | SavePhotoSuccessType

type AddPostType = ReturnType<typeof addPost>
export const addPost = (newPostText: string) => {
    return {
        type: 'ADD-POST', newPostText
    } as const
}

type DeletePostType = ReturnType<typeof deletePost>
export const deletePost = (postId: number) => {
    return {
        type: 'DELETE-POST', id: postId
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
type SavePhotoSuccessType = ReturnType<typeof SavePhotoSuccess>
const SavePhotoSuccess = (photos: PhotosType) => {
    return {
        type: 'SAVE_PHOTO_SUCCESS', photos
    } as const
}

export const getUserProfile = (userId: number) => {
    return async (dispatch: Dispatch) => {
        let response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    }
}

export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))

}
export const putStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

export const savePhoto = (photo: File) => async (dispatch: Dispatch) => {
    let response = await profileAPI.savePhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(SavePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profileData: ProfileType):ThunkAction<void, RootStateType, unknown, ProfileActionsTypes> => async (dispatch,getState:()=>RootStateType) => {
    const userId = Number(getState().auth.userId)
    let response = await profileAPI.updateProfileInfo(profileData)
    if (response.data.resultCode === 0 ) {
       await dispatch(getUserProfile(userId))
    }
}
