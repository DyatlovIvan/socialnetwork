

const dialogsPageReducer = (state,action)=>{

   if( action.type === 'UPDATE-NEW-MESSAGE-BODY'){
       state.newMessageBody = action.body;
    }else if (action.type === 'SEND-MESSAGE'){
        let body = state.newMessageBody;
       state.newMessageBody = '';
       state.messages.push({id:4,message:body})
    }

    return state
}