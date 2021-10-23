import style from './Dialogs.module.css'
import {ActionsTypes, DialogsPageType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { ChangeEvent } from 'react';

type DialogType = {
    dialogsPage: DialogsPageType
    dispatch: (action:ActionsTypes)=>void
}

export function Dialog(props: DialogType) {
    let dialogElements = props.dialogsPage.dialogs.map(el => <DialogItem id={el.id} name={el.name} img={el.img} />)
    let messageElements = props.dialogsPage.messages.map(el => <Message id={el.id} message={el.message} />)

    let newMessageBody = props.dialogsPage.newMessageBody;
    const onSendMessageClickHandler = () =>{
        props.dispatch(sendMessageCreator());
    }
    const onNewMessageChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        let body = e.currentTarget.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    } 
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItem}>
                {dialogElements}
            </div>
            <div className={style.message}>
                <div>
                    {messageElements}
                </div>
                <div>
                    <div><textarea value ={newMessageBody} onChange = {onNewMessageChangeHandler}  placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClickHandler}>Send</button></div>
                </div>
            </div>
        </div>
    )
}