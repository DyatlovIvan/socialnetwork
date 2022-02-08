import {addPost, deletePost, InitialStateType, profilePageReducer} from "./profilePageReducer";

const initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hi, how a u?', likeCount: 12},
        {id: 2, message: "It\'s my first post", likeCount: 10}
    ],
    profile: null,
    status: ''
}

test('new post should be added', () => {
    const newState = profilePageReducer(initialState,addPost('new post'))

    expect(newState.posts.length).toBe(3)
})

test('new post message should be correct', () => {
    const newState = profilePageReducer(initialState,addPost('new post'))

    expect(newState.posts[0].message).toBe('new post')
})

test('after deleting length of message should be decrement', () => {
    const newState = profilePageReducer(initialState,deletePost(1))

    expect(newState.posts.length).toBe(1)
})

test(`after deleting length shouldn't be decrement`, () => {
    const newState = profilePageReducer(initialState,deletePost(1000))

    expect(newState.posts.length).toBe(2)
})

