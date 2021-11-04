
export type InitialStateType = {
    posts: Array<PostsType>
    newPostText: string
}

export type PostsType = {
    id: number
    message: string
    likeCount: number
}

const initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hi, how a u?', likeCount: 12},
        {id: 2, message: "It\'s my first post", likeCount: 10}
    ],
    newPostText: ''
}

export const profilePageReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

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


type ActionsTypes = addPostActionCreatorType| updateNewPostTextActionCreatorType
// type AddPostActionCreatorType = {
//     type: 'ADD-POST'
// }
type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    } as const
}

// type ActionCommonType = ReturnType<typeof addPostActionCreator> |  ReturnType<typeof updateNewPostTextActionCreator>
type updateNewPostTextActionCreatorType  =ReturnType<typeof updateNewPostTextActionCreator>
export const updateNewPostTextActionCreator = (value: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', value: value
    } as const
}