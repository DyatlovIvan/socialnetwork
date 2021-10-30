import {ActionsTypes, PostsType, ProfilePageType, RootStateType} from "./state";

const initialState = {
    posts: [
        { id: 1, message: 'Hi, how a u?', likeCount: 12 },
        { id: 2, message: "It\'s my first post", likeCount: 10 }
    ],
    newPostText: ''
}

export const profilePageReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {id: 3, message: state.newPostText, likeCount: 0}
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.value;
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const updateNewPostTextActionCreator = (value: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', value: value
    } as const
}