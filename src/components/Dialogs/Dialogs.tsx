import style from './Dialogs.module.css'
import {DialogsPageType} from "../../redux/state";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type DialogType= {
    dialogsPage : DialogsPageType
}

export function Dialog(props:DialogType){
    let dialogElements = props.dialogsPage.dialogs.map(el => <DialogItem id={el.id} name={el.name} img={el.img}/>)
    let messageElements = props.dialogsPage.messages.map(el =><Message id = {el.id} message = {el.message}/>)
    return(
        <div className={style.dialogs}>
            <div className={style.dialogItem}>
                {dialogElements}
            </div>
            <div className={style.message}>
                {messageElements}
            </div>
        </div>
    )
}