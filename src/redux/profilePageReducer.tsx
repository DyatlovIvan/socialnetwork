import {PostsType} from "./state";

const profilePageReducer = (state,action)=>{

    if (action.type === 'ADD-POST') {
        let newPost: PostsType = { id: 3, message: state.newPostText, likeCount: 0 }
        state.posts.push(newPost)
        state.newPostText = ''
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.value;
    }

    return state
}