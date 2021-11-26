import {addPost, profilePageReducer, updateNewPostText} from "./profilePageReducer";
import {dialogsPageReducer, sendMessageCreator, updateNewMessageBodyCreator} from "./dialogsPageReducer";

export type storeType = {
    _state: RootStateType
    renderEntireTree: () => void
    //updateNewPostText: (value: string) => void
    subscribes: (callBack: () => void) => void
    getState: ()=> RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof addPost> |
                        ReturnType<typeof updateNewPostText> |
                        ReturnType<typeof sendMessageCreator>|
                        ReturnType<typeof updateNewMessageBodyCreator>


export type PostsType = {
    id: number
    message: string
    likeCount: number
}

export type DialogsType = {
    id: number
    name: string
    img: string
}

type MessagesType = {
    id: number
    message: string
}

type FriendsType = {
    id: number
    name: string
    img: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody:string

}

type SidebarType = {
    friends: Array<FriendsType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

const store:storeType = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how a u?', likeCount: 12 },
                { id: 2, message: "It\'s my first post", likeCount: 10 }
            ],
            newPostText: ''

        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Dima',
                    img: 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg'
                },
                {
                    id: 2,
                    name: 'Valera',
                    img: 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg'
                },
                {
                    id: 3,
                    name: 'Sveta',
                    img: 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg'
                },
                {
                    id: 4,
                    name: 'Tanya',
                    img: 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg'
                },
                {
                    id: 5,
                    name: 'Anton',
                    img: 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg'
                },
                {
                    id: 6,
                    name: 'Alexandr',
                    img: 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg'
                }
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'how a u?' },
                { id: 3, message: 'yo' },
            ],
            newMessageBody: ''
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Dima',
                    img: 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg'
                },
                {
                    id: 2,
                    name: 'Valera',
                    img: 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg'
                },
                {
                    id: 3,
                    name: 'Sveta',
                    img: 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg'
                },
            ]
        }
    },
    renderEntireTree() {

    },

    subscribes(callBack: () => void) {
        this.renderEntireTree = callBack;
    },
    getState() {
        return this._state
    },
    dispatch(action: ActionsTypes) {
       // this._state.profilePage = profilePageReducer(this._state.profilePage,action)
       // this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage,action)
        this.renderEntireTree()


        /////////////////////////////////////////
        // if (action.type === 'ADD-POST') {
        //     let newPost: PostsType = { id: 3, message: this._state.profilePage.newPostText, likeCount: 0 }
        //     this._state.profilePage.posts.push(newPost)
        //     this._state.profilePage.newPostText = '';
        //     this.renderEntireTree()
        // } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        //     this._state.profilePage.newPostText = action.value;
        //     this.renderEntireTree()
        // }else if( action.type === 'UPDATE-NEW-MESSAGE-BODY'){
        //     this._state.dialogsPage.newMessageBody = action.body;
        //     this.renderEntireTree()
        // }else if (action.type === 'SEND-MESSAGE'){
        //     let body = this._state.dialogsPage.newMessageBody;
        //     this._state.dialogsPage.newMessageBody = '';
        //     this._state.dialogsPage.messages.push({id:4,message:body});
        //     this.renderEntireTree()
        // }
    }
}

export default store;


