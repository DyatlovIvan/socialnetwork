


export type initialStateType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
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
}
export const dialogsPageReducer = (state = initialState, action: ActionsTypes):initialStateType => {
    switch (action.type) {
        case "SEND-MESSAGE":
            return {...state,messages:[...state.messages,{id: 7, message: action.newMessageBody}]}
        default:
            return state

    }
}

type ActionsTypes = sendMessageCreatorType


type sendMessageCreatorType = ReturnType<typeof sendMessageCreator>
export const sendMessageCreator = (newMessageBody:string)=>{
    return{
        type: 'SEND-MESSAGE',newMessageBody
    } as const
}
