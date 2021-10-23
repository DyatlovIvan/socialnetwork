import {ActionsTypes, DialogsPageType} from "./state";


export const dialogsPageReducer = (state: DialogsPageType, action: ActionsTypes) => {
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