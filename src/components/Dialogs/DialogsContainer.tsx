import style from './Dialogs.module.css'
import {ActionsTypes, DialogsPageType} from "../../redux/state";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsPageReducer";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { ChangeEvent } from 'react';
import {Dialog} from "./Dialogs";
import {StoreType} from "../../redux/redux-store";

type DialogType = {
    store:StoreType
}

export function DialogContainer(props: DialogType) {
    const state = props.store.getState().dialogsPage;

    const onSendMessageClickHandler = () =>{
        props.store.dispatch(sendMessageCreator());
    }
    const onNewMessageChangeHandler = (body:string) =>{
        props.store.dispatch(updateNewMessageBodyCreator(body));
    } 
    return <Dialog dialogsPage={state}
                   sendMessage = {onSendMessageClickHandler}
                   updateNewMessageBody = {onNewMessageChangeHandler}/>
}