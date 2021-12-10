import style from './Dialogs.module.css'
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { ChangeEvent } from 'react';
import {DialogsPageType} from "../../redux/state";
import {Redirect} from "react-router-dom";

type DialogType = {
    dialogsPage: DialogsPageType
    isAuth:boolean
    onSendMessageClickHandler: () => void
    onNewMessageChangeHandler: (body: string) => void
}

export function Dialogs(props: DialogType) {
    let dialogElements = props.dialogsPage.dialogs.map(el => <DialogItem id={el.id} name={el.name} img={el.img} />)
    let messageElements = props.dialogsPage.messages.map(el => <Message id={el.id} message={el.message} />)

    let newMessageBody = props.dialogsPage.newMessageBody;
    const onSendMessageClickHandler = () =>{
        debugger
       props.onSendMessageClickHandler()
    }
    const onNewMessageChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        debugger
        let body = e.currentTarget.value;
        props.onNewMessageChangeHandler(body)
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