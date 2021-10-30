import {ActionsTypes, DialogsPageType} from "./state";

const initialState = {
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
}
export const dialogsPageReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body;
            return state
        case "SEND-MESSAGE":
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 4, message: body})
            return state
        default:
            return state

    }
}

export const sendMessageCreator = ()=>{
    return{
        type: 'SEND-MESSAGE'
    } as const
}

export const updateNewMessageBodyCreator = (value:string) =>{
    return{
        type: 'UPDATE-NEW-MESSAGE-BODY', body: value
    } as const
}