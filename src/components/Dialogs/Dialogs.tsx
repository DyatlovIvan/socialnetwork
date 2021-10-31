import style from './Dialogs.module.css'
import {ActionsTypes, DialogsPageType} from "../../redux/state";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsPageReducer";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { ChangeEvent } from 'react';

type DialogType = {
    dialogsPage: DialogsPageType
    sendMessage:()=>void
    updateNewMessageBody:(body:string)=>void

}

export function Dialog(props: DialogType) {
    let dialogElements = props.dialogsPage.dialogs.map(el => <DialogItem id={el.id} name={el.name} img={el.img} />)
    let messageElements = props.dialogsPage.messages.map(el => <Message id={el.id} message={el.message} />)

    let newMessageBody = props.dialogsPage.newMessageBody;
    const onSendMessageClickHandler = () =>{
       props.sendMessage()
    }
    const onNewMessageChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        let body = e.currentTarget.value;
        props.updateNewMessageBody(body)
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